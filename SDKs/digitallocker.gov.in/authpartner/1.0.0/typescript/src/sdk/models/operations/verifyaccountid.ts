import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VerifyAccountIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class VerifyAccountId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: any;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class VerifyAccountId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class VerifyAccountId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: any;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class VerifyAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: any;

  @SpeakeasyMetadata()
  security: VerifyAccountIdSecurity;
}


export class VerifyAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyAccountId400ApplicationJsonObject?: VerifyAccountId400ApplicationJson;

  @SpeakeasyMetadata()
  verifyAccountId401ApplicationJsonObject?: VerifyAccountId401ApplicationJson;

  @SpeakeasyMetadata()
  verifyAccountId500ApplicationJsonObject?: VerifyAccountId500ApplicationJson;

  @SpeakeasyMetadata()
  verifyAccountResponse?: shared.VerifyAccountResponse;
}
