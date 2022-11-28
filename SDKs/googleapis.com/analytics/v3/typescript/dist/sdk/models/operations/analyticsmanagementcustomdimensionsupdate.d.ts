import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementCustomDimensionsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    customDimensionId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomDimensionsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    ignoreCustomDataSourceLinks?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementCustomDimensionsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomDimensionsUpdateRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementCustomDimensionsUpdatePathParams;
    queryParams: AnalyticsManagementCustomDimensionsUpdateQueryParams;
    request?: shared.CustomDimensionInput;
    security: AnalyticsManagementCustomDimensionsUpdateSecurity;
}
export declare class AnalyticsManagementCustomDimensionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    customDimension?: shared.CustomDimension;
    statusCode: number;
}
