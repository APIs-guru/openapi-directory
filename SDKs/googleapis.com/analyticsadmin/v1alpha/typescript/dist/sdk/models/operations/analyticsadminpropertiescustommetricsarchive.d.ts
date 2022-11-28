import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesCustomMetricsArchivePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AnalyticsadminPropertiesCustomMetricsArchiveQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesCustomMetricsArchiveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesCustomMetricsArchiveRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesCustomMetricsArchivePathParams;
    queryParams: AnalyticsadminPropertiesCustomMetricsArchiveQueryParams;
    request?: Map<string, any>;
    security: AnalyticsadminPropertiesCustomMetricsArchiveSecurity;
}
export declare class AnalyticsadminPropertiesCustomMetricsArchiveResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
