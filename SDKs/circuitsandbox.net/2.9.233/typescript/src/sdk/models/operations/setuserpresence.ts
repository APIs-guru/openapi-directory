import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetUserPresenceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=clearDND;" })
  clearDnd?: boolean;

  @Metadata({ data: "form, name=dndUntil;" })
  dndUntil?: Date;

  @Metadata({ data: "form, name=state;" })
  state: string;

  @Metadata({ data: "form, name=statusMessage;" })
  statusMessage?: string;
}


export class SetUserPresenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class SetUserPresenceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: SetUserPresenceRequestBody;

  @Metadata()
  security: SetUserPresenceSecurity;
}


export class SetUserPresenceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  presence?: any;

  @Metadata()
  statusCode: number;
}
