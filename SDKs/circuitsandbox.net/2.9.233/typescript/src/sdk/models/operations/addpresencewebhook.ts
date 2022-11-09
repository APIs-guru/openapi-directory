import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddPresenceWebHookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=url;" })
  url: string;

  @Metadata({ data: "form, name=userIds;" })
  userIds: string[];
}


export class AddPresenceWebHookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddPresenceWebHookRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddPresenceWebHookRequestBody;

  @Metadata()
  security: AddPresenceWebHookSecurity;
}


export class AddPresenceWebHookResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webHook?: any;
}
