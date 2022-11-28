import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesCustomMetricsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesCustomMetricsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticsadminPropertiesCustomMetricsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesCustomMetricsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesCustomMetricsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesCustomMetricsListSecurityOption1;
    option2?: AnalyticsadminPropertiesCustomMetricsListSecurityOption2;
}
export declare class AnalyticsadminPropertiesCustomMetricsListRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesCustomMetricsListPathParams;
    queryParams: AnalyticsadminPropertiesCustomMetricsListQueryParams;
    security: AnalyticsadminPropertiesCustomMetricsListSecurity;
}
export declare class AnalyticsadminPropertiesCustomMetricsListResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaListCustomMetricsResponse?: shared.GoogleAnalyticsAdminV1alphaListCustomMetricsResponse;
    statusCode: number;
}
