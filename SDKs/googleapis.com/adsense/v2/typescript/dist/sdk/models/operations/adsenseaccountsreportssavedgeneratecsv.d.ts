import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsReportsSavedGenerateCsvPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum {
    ReportingDateRangeUnspecified = "REPORTING_DATE_RANGE_UNSPECIFIED",
    Custom = "CUSTOM",
    Today = "TODAY",
    Yesterday = "YESTERDAY",
    MonthToDate = "MONTH_TO_DATE",
    YearToDate = "YEAR_TO_DATE",
    Last7Days = "LAST_7_DAYS",
    Last30Days = "LAST_30_DAYS"
}
export declare enum AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum {
    ReportingTimeZoneUnspecified = "REPORTING_TIME_ZONE_UNSPECIFIED",
    AccountTimeZone = "ACCOUNT_TIME_ZONE",
    GoogleTimeZone = "GOOGLE_TIME_ZONE"
}
export declare class AdsenseAccountsReportsSavedGenerateCsvQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    currencyCode?: string;
    dateRange?: AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum;
    endDateDay?: number;
    endDateMonth?: number;
    endDateYear?: number;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    reportingTimeZone?: AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum;
    startDateDay?: number;
    startDateMonth?: number;
    startDateYear?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdsenseAccountsReportsSavedGenerateCsvSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsSavedGenerateCsvSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsSavedGenerateCsvSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsReportsSavedGenerateCsvSecurityOption1;
    option2?: AdsenseAccountsReportsSavedGenerateCsvSecurityOption2;
}
export declare class AdsenseAccountsReportsSavedGenerateCsvRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsReportsSavedGenerateCsvPathParams;
    queryParams: AdsenseAccountsReportsSavedGenerateCsvQueryParams;
    security: AdsenseAccountsReportsSavedGenerateCsvSecurity;
}
export declare class AdsenseAccountsReportsSavedGenerateCsvResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
