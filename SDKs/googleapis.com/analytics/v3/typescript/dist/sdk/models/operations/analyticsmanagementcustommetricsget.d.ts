import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementCustomMetricsGetPathParams extends SpeakeasyBase {
    accountId: string;
    customMetricId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomMetricsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementCustomMetricsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomMetricsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomMetricsGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementCustomMetricsGetSecurityOption1;
    option2?: AnalyticsManagementCustomMetricsGetSecurityOption2;
}
export declare class AnalyticsManagementCustomMetricsGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementCustomMetricsGetPathParams;
    queryParams: AnalyticsManagementCustomMetricsGetQueryParams;
    security: AnalyticsManagementCustomMetricsGetSecurity;
}
export declare class AnalyticsManagementCustomMetricsGetResponse extends SpeakeasyBase {
    contentType: string;
    customMetric?: shared.CustomMetric;
    statusCode: number;
}
