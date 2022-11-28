import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsReportsSavedGeneratePathParams extends SpeakeasyBase {
    name: string;
}
export declare enum AdsenseAccountsReportsSavedGenerateDateRangeEnum {
    ReportingDateRangeUnspecified = "REPORTING_DATE_RANGE_UNSPECIFIED",
    Custom = "CUSTOM",
    Today = "TODAY",
    Yesterday = "YESTERDAY",
    MonthToDate = "MONTH_TO_DATE",
    YearToDate = "YEAR_TO_DATE",
    Last7Days = "LAST_7_DAYS",
    Last30Days = "LAST_30_DAYS"
}
export declare enum AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum {
    ReportingTimeZoneUnspecified = "REPORTING_TIME_ZONE_UNSPECIFIED",
    AccountTimeZone = "ACCOUNT_TIME_ZONE",
    GoogleTimeZone = "GOOGLE_TIME_ZONE"
}
export declare class AdsenseAccountsReportsSavedGenerateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    currencyCode?: string;
    dateRange?: AdsenseAccountsReportsSavedGenerateDateRangeEnum;
    endDateDay?: number;
    endDateMonth?: number;
    endDateYear?: number;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    reportingTimeZone?: AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum;
    startDateDay?: number;
    startDateMonth?: number;
    startDateYear?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdsenseAccountsReportsSavedGenerateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsSavedGenerateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsSavedGenerateSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsReportsSavedGenerateSecurityOption1;
    option2?: AdsenseAccountsReportsSavedGenerateSecurityOption2;
}
export declare class AdsenseAccountsReportsSavedGenerateRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsReportsSavedGeneratePathParams;
    queryParams: AdsenseAccountsReportsSavedGenerateQueryParams;
    security: AdsenseAccountsReportsSavedGenerateSecurity;
}
export declare class AdsenseAccountsReportsSavedGenerateResponse extends SpeakeasyBase {
    contentType: string;
    reportResult?: shared.ReportResult;
    statusCode: number;
}
