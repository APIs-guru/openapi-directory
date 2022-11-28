import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetUserPresenceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=clearDND;" })
  clearDnd?: boolean;

  @SpeakeasyMetadata({ data: "form, name=dndUntil;" })
  dndUntil?: Date;

  @SpeakeasyMetadata({ data: "form, name=state;" })
  state: string;

  @SpeakeasyMetadata({ data: "form, name=statusMessage;" })
  statusMessage?: string;
}


export class SetUserPresenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class SetUserPresenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: SetUserPresenceRequestBody;

  @SpeakeasyMetadata()
  security: SetUserPresenceSecurity;
}


export class SetUserPresenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  presence?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
