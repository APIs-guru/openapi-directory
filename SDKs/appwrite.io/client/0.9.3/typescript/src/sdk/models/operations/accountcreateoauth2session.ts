import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountCreateOAuth2SessionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class AccountCreateOAuth2SessionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=failure" })
  failure?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scopes" })
  scopes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=success" })
  success?: string;
}


export class AccountCreateOAuth2SessionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountCreateOAuth2SessionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccountCreateOAuth2SessionPathParams;

  @Metadata()
  queryParams: AccountCreateOAuth2SessionQueryParams;

  @Metadata()
  security: AccountCreateOAuth2SessionSecurity;
}


export class AccountCreateOAuth2SessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
