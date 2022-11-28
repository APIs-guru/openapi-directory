import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AdsenseAccountsReportsSavedGeneratePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum AdsenseAccountsReportsSavedGenerateDateRangeEnum {
    ReportingDateRangeUnspecified = "REPORTING_DATE_RANGE_UNSPECIFIED",
    Custom = "CUSTOM",
    Today = "TODAY",
    Yesterday = "YESTERDAY",
    MonthToDate = "MONTH_TO_DATE",
    YearToDate = "YEAR_TO_DATE",
    Last7Days = "LAST_7_DAYS",
    Last30Days = "LAST_30_DAYS"
}

export enum AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum {
    ReportingTimeZoneUnspecified = "REPORTING_TIME_ZONE_UNSPECIFIED",
    AccountTimeZone = "ACCOUNT_TIME_ZONE",
    GoogleTimeZone = "GOOGLE_TIME_ZONE"
}


export class AdsenseAccountsReportsSavedGenerateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRange" })
  dateRange?: AdsenseAccountsReportsSavedGenerateDateRangeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.day" })
  endDateDay?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.month" })
  endDateMonth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.year" })
  endDateYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportingTimeZone" })
  reportingTimeZone?: AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.day" })
  startDateDay?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.month" })
  startDateMonth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.year" })
  startDateYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class AdsenseAccountsReportsSavedGenerateSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsReportsSavedGenerateSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsReportsSavedGenerateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: AdsenseAccountsReportsSavedGenerateSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: AdsenseAccountsReportsSavedGenerateSecurityOption2;
}


export class AdsenseAccountsReportsSavedGenerateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AdsenseAccountsReportsSavedGeneratePathParams;

  @SpeakeasyMetadata()
  queryParams: AdsenseAccountsReportsSavedGenerateQueryParams;

  @SpeakeasyMetadata()
  security: AdsenseAccountsReportsSavedGenerateSecurity;
}


export class AdsenseAccountsReportsSavedGenerateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  reportResult?: shared.ReportResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
