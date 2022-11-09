import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PushUriToAccountIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class PushUriToAccountIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: any;

  @Metadata()
  security: PushUriToAccountIdSecurity;
}


export class PushUriToAccountId400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class PushUriToAccountId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class PushUriToAccountId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class PushUriToAccountId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class PushUriToAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pushUriToAccountId400ApplicationJsonObject?: PushUriToAccountId400ApplicationJson;

  @Metadata()
  pushUriToAccountId401ApplicationJsonObject?: PushUriToAccountId401ApplicationJson;

  @Metadata()
  pushUriToAccountId404ApplicationJsonObject?: PushUriToAccountId404ApplicationJson;

  @Metadata()
  pushUriToAccountId500ApplicationJsonObject?: PushUriToAccountId500ApplicationJson;

  @Metadata()
  sample?: any;

  @Metadata()
  statusCode: number;
}
