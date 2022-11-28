import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementFiltersListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AnalyticsManagementFiltersListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementFiltersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementFiltersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementFiltersListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementFiltersListSecurityOption1;
    option2?: AnalyticsManagementFiltersListSecurityOption2;
}
export declare class AnalyticsManagementFiltersListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementFiltersListPathParams;
    queryParams: AnalyticsManagementFiltersListQueryParams;
    security: AnalyticsManagementFiltersListSecurity;
}
export declare class AnalyticsManagementFiltersListResponse extends SpeakeasyBase {
    contentType: string;
    filters?: shared.Filters;
    statusCode: number;
}
