import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PushUriToAccountIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class PushUriToAccountId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class PushUriToAccountId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class PushUriToAccountId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class PushUriToAccountId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class PushUriToAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: any;

  @SpeakeasyMetadata()
  security: PushUriToAccountIdSecurity;
}


export class PushUriToAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pushUriToAccountId400ApplicationJsonObject?: PushUriToAccountId400ApplicationJson;

  @SpeakeasyMetadata()
  pushUriToAccountId401ApplicationJsonObject?: PushUriToAccountId401ApplicationJson;

  @SpeakeasyMetadata()
  pushUriToAccountId404ApplicationJsonObject?: PushUriToAccountId404ApplicationJson;

  @SpeakeasyMetadata()
  pushUriToAccountId500ApplicationJsonObject?: PushUriToAccountId500ApplicationJson;

  @SpeakeasyMetadata()
  sample?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
