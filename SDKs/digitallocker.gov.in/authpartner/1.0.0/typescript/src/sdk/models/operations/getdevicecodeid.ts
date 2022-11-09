import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDeviceCodeIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class GetDeviceCodeIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: GetDeviceCodeIdSecurity;
}


export class GetDeviceCodeId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetDeviceCodeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceAuthorizationCodeResponse?: shared.DeviceAuthorizationCodeResponse;

  @Metadata()
  getDeviceCodeId400ApplicationJsonOneOf?: any;

  @Metadata()
  getDeviceCodeId401ApplicationJsonObject?: GetDeviceCodeId401ApplicationJson;

  @Metadata()
  getDeviceCodeId500ApplicationJsonOneOf?: any;

  @Metadata()
  statusCode: number;
}
