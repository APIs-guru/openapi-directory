import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsenseAccountsAdunitsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=adClientId" })
  adClientId: string;
}


export class AdsenseAccountsAdunitsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeInactive" })
  includeInactive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdsenseAccountsAdunitsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsAdunitsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsAdunitsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdsenseAccountsAdunitsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdsenseAccountsAdunitsListSecurityOption2;
}


export class AdsenseAccountsAdunitsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsenseAccountsAdunitsListPathParams;

  @Metadata()
  queryParams: AdsenseAccountsAdunitsListQueryParams;

  @Metadata()
  security: AdsenseAccountsAdunitsListSecurity;
}


export class AdsenseAccountsAdunitsListResponse extends SpeakeasyBase {
  @Metadata()
  adUnits?: shared.AdUnits;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
