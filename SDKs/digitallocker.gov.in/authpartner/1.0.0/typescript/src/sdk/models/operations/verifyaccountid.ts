import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VerifyAccountIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class VerifyAccountIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: any;

  @Metadata()
  security: VerifyAccountIdSecurity;
}


export class VerifyAccountId400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: any;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class VerifyAccountId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class VerifyAccountId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: any;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class VerifyAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyAccountId400ApplicationJsonObject?: VerifyAccountId400ApplicationJson;

  @Metadata()
  verifyAccountId401ApplicationJsonObject?: VerifyAccountId401ApplicationJson;

  @Metadata()
  verifyAccountId500ApplicationJsonObject?: VerifyAccountId500ApplicationJson;

  @Metadata()
  verifyAccountResponse?: shared.VerifyAccountResponse;
}
