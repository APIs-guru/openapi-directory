import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfileUserLinksListPathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfileUserLinksListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementProfileUserLinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfileUserLinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfileUserLinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementProfileUserLinksListSecurityOption1;
    option2?: AnalyticsManagementProfileUserLinksListSecurityOption2;
}
export declare class AnalyticsManagementProfileUserLinksListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfileUserLinksListPathParams;
    queryParams: AnalyticsManagementProfileUserLinksListQueryParams;
    security: AnalyticsManagementProfileUserLinksListSecurity;
}
export declare class AnalyticsManagementProfileUserLinksListResponse extends SpeakeasyBase {
    contentType: string;
    entityUserLinks?: shared.EntityUserLinks;
    statusCode: number;
}
