import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementFiltersPatchPathParams extends SpeakeasyBase {
    accountId: string;
    filterId: string;
}
export declare class AnalyticsManagementFiltersPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementFiltersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementFiltersPatchRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementFiltersPatchPathParams;
    queryParams: AnalyticsManagementFiltersPatchQueryParams;
    request?: shared.FilterInput;
    security: AnalyticsManagementFiltersPatchSecurity;
}
export declare class AnalyticsManagementFiltersPatchResponse extends SpeakeasyBase {
    contentType: string;
    filter?: shared.Filter;
    statusCode: number;
}
