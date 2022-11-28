import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementFiltersDeletePathParams extends SpeakeasyBase {
    accountId: string;
    filterId: string;
}
export declare class AnalyticsManagementFiltersDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementFiltersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementFiltersDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementFiltersDeletePathParams;
    queryParams: AnalyticsManagementFiltersDeleteQueryParams;
    security: AnalyticsManagementFiltersDeleteSecurity;
}
export declare class AnalyticsManagementFiltersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    filter?: shared.Filter;
    statusCode: number;
}
