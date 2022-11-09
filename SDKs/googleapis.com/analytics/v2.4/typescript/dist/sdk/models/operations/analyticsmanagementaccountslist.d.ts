import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementAccountsListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementAccountsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementAccountsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementAccountsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementAccountsListSecurityOption1;
    option2?: AnalyticsManagementAccountsListSecurityOption2;
}
export declare class AnalyticsManagementAccountsListRequest extends SpeakeasyBase {
    queryParams: AnalyticsManagementAccountsListQueryParams;
    security: AnalyticsManagementAccountsListSecurity;
}
export declare class AnalyticsManagementAccountsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
