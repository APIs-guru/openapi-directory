import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementFiltersGetPathParams extends SpeakeasyBase {
    accountId: string;
    filterId: string;
}
export declare class AnalyticsManagementFiltersGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementFiltersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementFiltersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementFiltersGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementFiltersGetSecurityOption1;
    option2?: AnalyticsManagementFiltersGetSecurityOption2;
}
export declare class AnalyticsManagementFiltersGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementFiltersGetPathParams;
    queryParams: AnalyticsManagementFiltersGetQueryParams;
    security: AnalyticsManagementFiltersGetSecurity;
}
export declare class AnalyticsManagementFiltersGetResponse extends SpeakeasyBase {
    contentType: string;
    filter?: shared.Filter;
    statusCode: number;
}
