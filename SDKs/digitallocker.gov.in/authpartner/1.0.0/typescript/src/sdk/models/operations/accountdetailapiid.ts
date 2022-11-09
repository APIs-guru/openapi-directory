import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountDetailApiIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class AccountDetailApiIdRequest extends SpeakeasyBase {
  @Metadata()
  security: AccountDetailApiIdSecurity;
}


export class AccountDetailApiId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class AccountDetailApiId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class AccountDetailApiIdResponse extends SpeakeasyBase {
  @Metadata()
  accountDetailApiId401ApplicationJsonObject?: AccountDetailApiId401ApplicationJson;

  @Metadata()
  accountDetailApiId500ApplicationJsonObject?: AccountDetailApiId500ApplicationJson;

  @Metadata()
  contentType: string;

  @Metadata()
  sample?: any;

  @Metadata()
  statusCode: number;
}
