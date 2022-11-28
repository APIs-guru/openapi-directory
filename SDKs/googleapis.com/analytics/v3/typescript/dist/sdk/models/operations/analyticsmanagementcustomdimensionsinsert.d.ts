import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementCustomDimensionsInsertPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomDimensionsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementCustomDimensionsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomDimensionsInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementCustomDimensionsInsertPathParams;
    queryParams: AnalyticsManagementCustomDimensionsInsertQueryParams;
    request?: shared.CustomDimensionInput;
    security: AnalyticsManagementCustomDimensionsInsertSecurity;
}
export declare class AnalyticsManagementCustomDimensionsInsertResponse extends SpeakeasyBase {
    contentType: string;
    customDimension?: shared.CustomDimension;
    statusCode: number;
}
