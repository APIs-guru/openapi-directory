import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsenseAccountsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class AdsenseAccountsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tree" })
  tree?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdsenseAccountsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdsenseAccountsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdsenseAccountsGetSecurityOption2;
}


export class AdsenseAccountsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsenseAccountsGetPathParams;

  @Metadata()
  queryParams: AdsenseAccountsGetQueryParams;

  @Metadata()
  security: AdsenseAccountsGetSecurity;
}


export class AdsenseAccountsGetResponse extends SpeakeasyBase {
  @Metadata()
  account?: shared.Account;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
