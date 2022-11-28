import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountCreateOAuth2SessionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class AccountCreateOAuth2SessionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=failure" })
  failure?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=success" })
  success?: string;
}


export class AccountCreateOAuth2SessionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountCreateOAuth2SessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountCreateOAuth2SessionPathParams;

  @SpeakeasyMetadata()
  queryParams: AccountCreateOAuth2SessionQueryParams;

  @SpeakeasyMetadata()
  security: AccountCreateOAuth2SessionSecurity;
}


export class AccountCreateOAuth2SessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
