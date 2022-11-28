import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementAccountSummariesListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementAccountSummariesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementAccountSummariesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementAccountSummariesListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementAccountSummariesListSecurityOption1;
    option2?: AnalyticsManagementAccountSummariesListSecurityOption2;
}
export declare class AnalyticsManagementAccountSummariesListRequest extends SpeakeasyBase {
    queryParams: AnalyticsManagementAccountSummariesListQueryParams;
    security: AnalyticsManagementAccountSummariesListSecurity;
}
export declare class AnalyticsManagementAccountSummariesListResponse extends SpeakeasyBase {
    accountSummaries?: shared.AccountSummaries;
    contentType: string;
    statusCode: number;
}
