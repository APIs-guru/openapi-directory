import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePresenceWebHookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdatePresenceWebHookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=url;" })
  url?: string;

  @Metadata({ data: "form, name=userIds;" })
  userIds?: string[];
}


export class UpdatePresenceWebHookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdatePresenceWebHookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePresenceWebHookPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdatePresenceWebHookRequestBody;

  @Metadata()
  security: UpdatePresenceWebHookSecurity;
}


export class UpdatePresenceWebHookResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webHook?: any;
}
