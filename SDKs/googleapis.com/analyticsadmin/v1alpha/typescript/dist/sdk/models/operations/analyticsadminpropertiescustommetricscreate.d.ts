import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesCustomMetricsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticsadminPropertiesCustomMetricsCreateQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesCustomMetricsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesCustomMetricsCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesCustomMetricsCreatePathParams;
    queryParams: AnalyticsadminPropertiesCustomMetricsCreateQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaCustomMetricInput;
    security: AnalyticsadminPropertiesCustomMetricsCreateSecurity;
}
export declare class AnalyticsadminPropertiesCustomMetricsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaCustomMetric?: shared.GoogleAnalyticsAdminV1alphaCustomMetric;
    statusCode: number;
}
