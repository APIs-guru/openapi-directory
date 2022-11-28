import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementCustomDimensionsGetPathParams extends SpeakeasyBase {
    accountId: string;
    customDimensionId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomDimensionsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementCustomDimensionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomDimensionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomDimensionsGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementCustomDimensionsGetSecurityOption1;
    option2?: AnalyticsManagementCustomDimensionsGetSecurityOption2;
}
export declare class AnalyticsManagementCustomDimensionsGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementCustomDimensionsGetPathParams;
    queryParams: AnalyticsManagementCustomDimensionsGetQueryParams;
    security: AnalyticsManagementCustomDimensionsGetSecurity;
}
export declare class AnalyticsManagementCustomDimensionsGetResponse extends SpeakeasyBase {
    contentType: string;
    customDimension?: shared.CustomDimension;
    statusCode: number;
}
