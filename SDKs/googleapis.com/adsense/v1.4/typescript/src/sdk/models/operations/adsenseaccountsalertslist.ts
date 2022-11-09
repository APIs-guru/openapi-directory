import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsenseAccountsAlertsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class AdsenseAccountsAlertsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdsenseAccountsAlertsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsAlertsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsAlertsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdsenseAccountsAlertsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdsenseAccountsAlertsListSecurityOption2;
}


export class AdsenseAccountsAlertsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsenseAccountsAlertsListPathParams;

  @Metadata()
  queryParams: AdsenseAccountsAlertsListQueryParams;

  @Metadata()
  security: AdsenseAccountsAlertsListSecurity;
}


export class AdsenseAccountsAlertsListResponse extends SpeakeasyBase {
  @Metadata()
  alerts?: shared.Alerts;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
