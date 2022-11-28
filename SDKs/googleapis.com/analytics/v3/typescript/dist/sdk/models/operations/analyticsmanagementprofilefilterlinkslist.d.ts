import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfileFilterLinksListPathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfileFilterLinksListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementProfileFilterLinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfileFilterLinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfileFilterLinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementProfileFilterLinksListSecurityOption1;
    option2?: AnalyticsManagementProfileFilterLinksListSecurityOption2;
}
export declare class AnalyticsManagementProfileFilterLinksListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfileFilterLinksListPathParams;
    queryParams: AnalyticsManagementProfileFilterLinksListQueryParams;
    security: AnalyticsManagementProfileFilterLinksListSecurity;
}
export declare class AnalyticsManagementProfileFilterLinksListResponse extends SpeakeasyBase {
    contentType: string;
    profileFilterLinks?: shared.ProfileFilterLinks;
    statusCode: number;
}
