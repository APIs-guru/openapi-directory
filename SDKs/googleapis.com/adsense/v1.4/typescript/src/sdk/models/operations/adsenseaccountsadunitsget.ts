import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsenseAccountsAdunitsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=adClientId" })
  adClientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=adUnitId" })
  adUnitId: string;
}


export class AdsenseAccountsAdunitsGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdsenseAccountsAdunitsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsAdunitsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsAdunitsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdsenseAccountsAdunitsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdsenseAccountsAdunitsGetSecurityOption2;
}


export class AdsenseAccountsAdunitsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsenseAccountsAdunitsGetPathParams;

  @Metadata()
  queryParams: AdsenseAccountsAdunitsGetQueryParams;

  @Metadata()
  security: AdsenseAccountsAdunitsGetSecurity;
}


export class AdsenseAccountsAdunitsGetResponse extends SpeakeasyBase {
  @Metadata()
  adUnit?: shared.AdUnit;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
