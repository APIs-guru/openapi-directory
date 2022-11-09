import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfilesListPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfilesListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementProfilesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfilesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfilesListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementProfilesListSecurityOption1;
    option2?: AnalyticsManagementProfilesListSecurityOption2;
}
export declare class AnalyticsManagementProfilesListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfilesListPathParams;
    queryParams: AnalyticsManagementProfilesListQueryParams;
    security: AnalyticsManagementProfilesListSecurity;
}
export declare class AnalyticsManagementProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
