import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePresenceWebHookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdatePresenceWebHookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=url;" })
  url?: string;

  @SpeakeasyMetadata({ data: "form, name=userIds;" })
  userIds?: string[];
}


export class UpdatePresenceWebHookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdatePresenceWebHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePresenceWebHookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdatePresenceWebHookRequestBody;

  @SpeakeasyMetadata()
  security: UpdatePresenceWebHookSecurity;
}


export class UpdatePresenceWebHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webHook?: any;
}
