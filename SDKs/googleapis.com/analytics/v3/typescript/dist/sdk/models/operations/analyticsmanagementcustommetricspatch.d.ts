import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementCustomMetricsPatchPathParams extends SpeakeasyBase {
    accountId: string;
    customMetricId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomMetricsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    ignoreCustomDataSourceLinks?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementCustomMetricsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomMetricsPatchRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementCustomMetricsPatchPathParams;
    queryParams: AnalyticsManagementCustomMetricsPatchQueryParams;
    request?: shared.CustomMetricInput;
    security: AnalyticsManagementCustomMetricsPatchSecurity;
}
export declare class AnalyticsManagementCustomMetricsPatchResponse extends SpeakeasyBase {
    contentType: string;
    customMetric?: shared.CustomMetric;
    statusCode: number;
}
