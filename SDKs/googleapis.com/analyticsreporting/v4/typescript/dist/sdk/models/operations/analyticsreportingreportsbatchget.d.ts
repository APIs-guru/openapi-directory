import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsreportingReportsBatchGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticsreportingReportsBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsreportingReportsBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsreportingReportsBatchGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsreportingReportsBatchGetSecurityOption1;
    option2?: AnalyticsreportingReportsBatchGetSecurityOption2;
}
export declare class AnalyticsreportingReportsBatchGetRequest extends SpeakeasyBase {
    queryParams: AnalyticsreportingReportsBatchGetQueryParams;
    request?: shared.GetReportsRequest;
    security: AnalyticsreportingReportsBatchGetSecurity;
}
export declare class AnalyticsreportingReportsBatchGetResponse extends SpeakeasyBase {
    contentType: string;
    getReportsResponse?: shared.GetReportsResponse;
    statusCode: number;
}
