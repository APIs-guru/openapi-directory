import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementCustomMetricsListPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomMetricsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startIndex?: number;
    userIp?: string;
}
export declare class AnalyticsManagementCustomMetricsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomMetricsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomMetricsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementCustomMetricsListSecurityOption1;
    option2?: AnalyticsManagementCustomMetricsListSecurityOption2;
}
export declare class AnalyticsManagementCustomMetricsListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementCustomMetricsListPathParams;
    queryParams: AnalyticsManagementCustomMetricsListQueryParams;
    security: AnalyticsManagementCustomMetricsListSecurity;
}
export declare class AnalyticsManagementCustomMetricsListResponse extends SpeakeasyBase {
    contentType: string;
    customMetrics?: shared.CustomMetrics;
    statusCode: number;
}
