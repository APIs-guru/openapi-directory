import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementCustomMetricsInsertPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomMetricsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementCustomMetricsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomMetricsInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementCustomMetricsInsertPathParams;
    queryParams: AnalyticsManagementCustomMetricsInsertQueryParams;
    request?: shared.CustomMetricInput;
    security: AnalyticsManagementCustomMetricsInsertSecurity;
}
export declare class AnalyticsManagementCustomMetricsInsertResponse extends SpeakeasyBase {
    contentType: string;
    customMetric?: shared.CustomMetric;
    statusCode: number;
}
