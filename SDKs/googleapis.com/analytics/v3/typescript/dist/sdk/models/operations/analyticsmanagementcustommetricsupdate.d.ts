import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementCustomMetricsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    customMetricId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomMetricsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    ignoreCustomDataSourceLinks?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementCustomMetricsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomMetricsUpdateRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementCustomMetricsUpdatePathParams;
    queryParams: AnalyticsManagementCustomMetricsUpdateQueryParams;
    request?: shared.CustomMetricInput;
    security: AnalyticsManagementCustomMetricsUpdateSecurity;
}
export declare class AnalyticsManagementCustomMetricsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    customMetric?: shared.CustomMetric;
    statusCode: number;
}
