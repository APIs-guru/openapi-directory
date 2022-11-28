import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDeviceCodeIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class GetDeviceCodeId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetDeviceCodeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: GetDeviceCodeIdSecurity;
}


export class GetDeviceCodeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceAuthorizationCodeResponse?: shared.DeviceAuthorizationCodeResponse;

  @SpeakeasyMetadata()
  getDeviceCodeId400ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  getDeviceCodeId401ApplicationJsonObject?: GetDeviceCodeId401ApplicationJson;

  @SpeakeasyMetadata()
  getDeviceCodeId500ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
