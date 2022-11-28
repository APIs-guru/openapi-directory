import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementCustomDimensionsListPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomDimensionsListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementCustomDimensionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomDimensionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomDimensionsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementCustomDimensionsListSecurityOption1;
    option2?: AnalyticsManagementCustomDimensionsListSecurityOption2;
}
export declare class AnalyticsManagementCustomDimensionsListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementCustomDimensionsListPathParams;
    queryParams: AnalyticsManagementCustomDimensionsListQueryParams;
    security: AnalyticsManagementCustomDimensionsListSecurity;
}
export declare class AnalyticsManagementCustomDimensionsListResponse extends SpeakeasyBase {
    contentType: string;
    customDimensions?: shared.CustomDimensions;
    statusCode: number;
}
