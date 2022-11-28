import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementCustomDimensionsPatchPathParams extends SpeakeasyBase {
    accountId: string;
    customDimensionId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomDimensionsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    ignoreCustomDataSourceLinks?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementCustomDimensionsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomDimensionsPatchRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementCustomDimensionsPatchPathParams;
    queryParams: AnalyticsManagementCustomDimensionsPatchQueryParams;
    request?: shared.CustomDimensionInput;
    security: AnalyticsManagementCustomDimensionsPatchSecurity;
}
export declare class AnalyticsManagementCustomDimensionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    customDimension?: shared.CustomDimension;
    statusCode: number;
}
