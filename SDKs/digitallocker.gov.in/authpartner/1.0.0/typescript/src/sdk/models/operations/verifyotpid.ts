import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VerifyOtpIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class VerifyOtpId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class VerifyOtpId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: any;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class VerifyOtpIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: any;

  @SpeakeasyMetadata()
  security: VerifyOtpIdSecurity;
}


export class VerifyOtpIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  demoAuthVerifyResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyOtpId400ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  verifyOtpId401ApplicationJsonObject?: VerifyOtpId401ApplicationJson;

  @SpeakeasyMetadata()
  verifyOtpId500ApplicationJsonObject?: VerifyOtpId500ApplicationJson;
}
