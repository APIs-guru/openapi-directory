import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsenseAccountsReportsSavedGenerateCsvPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum {
    ReportingDateRangeUnspecified = "REPORTING_DATE_RANGE_UNSPECIFIED"
,    Custom = "CUSTOM"
,    Today = "TODAY"
,    Yesterday = "YESTERDAY"
,    MonthToDate = "MONTH_TO_DATE"
,    YearToDate = "YEAR_TO_DATE"
,    Last7Days = "LAST_7_DAYS"
,    Last30Days = "LAST_30_DAYS"
}

export enum AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum {
    ReportingTimeZoneUnspecified = "REPORTING_TIME_ZONE_UNSPECIFIED"
,    AccountTimeZone = "ACCOUNT_TIME_ZONE"
,    GoogleTimeZone = "GOOGLE_TIME_ZONE"
}


export class AdsenseAccountsReportsSavedGenerateCsvQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateRange" })
  dateRange?: AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate.day" })
  endDateDay?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate.month" })
  endDateMonth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate.year" })
  endDateYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=reportingTimeZone" })
  reportingTimeZone?: AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate.day" })
  startDateDay?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate.month" })
  startDateMonth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate.year" })
  startDateYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class AdsenseAccountsReportsSavedGenerateCsvSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsReportsSavedGenerateCsvSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsReportsSavedGenerateCsvSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdsenseAccountsReportsSavedGenerateCsvSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdsenseAccountsReportsSavedGenerateCsvSecurityOption2;
}


export class AdsenseAccountsReportsSavedGenerateCsvRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsenseAccountsReportsSavedGenerateCsvPathParams;

  @Metadata()
  queryParams: AdsenseAccountsReportsSavedGenerateCsvQueryParams;

  @Metadata()
  security: AdsenseAccountsReportsSavedGenerateCsvSecurity;
}


export class AdsenseAccountsReportsSavedGenerateCsvResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpBody?: shared.HttpBody;

  @Metadata()
  statusCode: number;
}
