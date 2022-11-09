import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VerifyOtpIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class VerifyOtpIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: any;

  @Metadata()
  security: VerifyOtpIdSecurity;
}


export class VerifyOtpId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class VerifyOtpId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: any;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class VerifyOtpIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  demoAuthVerifyResponse?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyOtpId400ApplicationJsonOneOf?: any;

  @Metadata()
  verifyOtpId401ApplicationJsonObject?: VerifyOtpId401ApplicationJson;

  @Metadata()
  verifyOtpId500ApplicationJsonObject?: VerifyOtpId500ApplicationJson;
}
