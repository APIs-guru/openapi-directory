import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsenseAccountsReportsGeneratePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class AdsenseAccountsReportsGenerateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dimension" })
  dimension?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metric" })
  metric?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useTimezoneReporting" })
  useTimezoneReporting?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdsenseAccountsReportsGenerateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsReportsGenerateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsReportsGenerateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdsenseAccountsReportsGenerateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdsenseAccountsReportsGenerateSecurityOption2;
}


export class AdsenseAccountsReportsGenerateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsenseAccountsReportsGeneratePathParams;

  @Metadata()
  queryParams: AdsenseAccountsReportsGenerateQueryParams;

  @Metadata()
  security: AdsenseAccountsReportsGenerateSecurity;
}


export class AdsenseAccountsReportsGenerateResponse extends SpeakeasyBase {
  @Metadata()
  adsenseReportsGenerateResponse?: shared.AdsenseReportsGenerateResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
