import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsenseAccountsReportsSavedGeneratePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=savedReportId" })
  savedReportId: string;
}


export class AdsenseAccountsReportsSavedGenerateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdsenseAccountsReportsSavedGenerateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsReportsSavedGenerateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsReportsSavedGenerateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdsenseAccountsReportsSavedGenerateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdsenseAccountsReportsSavedGenerateSecurityOption2;
}


export class AdsenseAccountsReportsSavedGenerateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsenseAccountsReportsSavedGeneratePathParams;

  @Metadata()
  queryParams: AdsenseAccountsReportsSavedGenerateQueryParams;

  @Metadata()
  security: AdsenseAccountsReportsSavedGenerateSecurity;
}


export class AdsenseAccountsReportsSavedGenerateResponse extends SpeakeasyBase {
  @Metadata()
  adsenseReportsGenerateResponse?: shared.AdsenseReportsGenerateResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
