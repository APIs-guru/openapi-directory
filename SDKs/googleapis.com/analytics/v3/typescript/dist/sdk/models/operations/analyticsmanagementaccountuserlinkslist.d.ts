import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementAccountUserLinksListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AnalyticsManagementAccountUserLinksListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementAccountUserLinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementAccountUserLinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementAccountUserLinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementAccountUserLinksListSecurityOption1;
    option2?: AnalyticsManagementAccountUserLinksListSecurityOption2;
}
export declare class AnalyticsManagementAccountUserLinksListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementAccountUserLinksListPathParams;
    queryParams: AnalyticsManagementAccountUserLinksListQueryParams;
    security: AnalyticsManagementAccountUserLinksListSecurity;
}
export declare class AnalyticsManagementAccountUserLinksListResponse extends SpeakeasyBase {
    contentType: string;
    entityUserLinks?: shared.EntityUserLinks;
    statusCode: number;
}
