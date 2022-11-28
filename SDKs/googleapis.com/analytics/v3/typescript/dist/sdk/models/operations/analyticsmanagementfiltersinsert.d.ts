import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementFiltersInsertPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AnalyticsManagementFiltersInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementFiltersInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementFiltersInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementFiltersInsertPathParams;
    queryParams: AnalyticsManagementFiltersInsertQueryParams;
    request?: shared.FilterInput;
    security: AnalyticsManagementFiltersInsertSecurity;
}
export declare class AnalyticsManagementFiltersInsertResponse extends SpeakeasyBase {
    contentType: string;
    filter?: shared.Filter;
    statusCode: number;
}
