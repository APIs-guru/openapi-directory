import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddPresenceWebHookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=url;" })
  url: string;

  @SpeakeasyMetadata({ data: "form, name=userIds;" })
  userIds: string[];
}


export class AddPresenceWebHookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddPresenceWebHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddPresenceWebHookRequestBody;

  @SpeakeasyMetadata()
  security: AddPresenceWebHookSecurity;
}


export class AddPresenceWebHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webHook?: any;
}
