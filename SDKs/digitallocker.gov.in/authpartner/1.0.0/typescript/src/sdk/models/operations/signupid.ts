import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SignUpIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class SignUpIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: any;

  @Metadata()
  security: SignUpIdSecurity;
}


export class SignUpId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class SignUpId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: any;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class SignUpIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  demoAuthResponse?: any;

  @Metadata()
  signUpId400ApplicationJsonOneOf?: any;

  @Metadata()
  signUpId401ApplicationJsonObject?: SignUpId401ApplicationJson;

  @Metadata()
  signUpId500ApplicationJsonObject?: SignUpId500ApplicationJson;

  @Metadata()
  statusCode: number;
}
