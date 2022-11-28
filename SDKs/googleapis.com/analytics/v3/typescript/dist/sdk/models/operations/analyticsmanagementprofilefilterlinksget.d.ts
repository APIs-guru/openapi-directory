import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfileFilterLinksGetPathParams extends SpeakeasyBase {
    accountId: string;
    linkId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfileFilterLinksGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementProfileFilterLinksGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfileFilterLinksGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfileFilterLinksGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementProfileFilterLinksGetSecurityOption1;
    option2?: AnalyticsManagementProfileFilterLinksGetSecurityOption2;
}
export declare class AnalyticsManagementProfileFilterLinksGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfileFilterLinksGetPathParams;
    queryParams: AnalyticsManagementProfileFilterLinksGetQueryParams;
    security: AnalyticsManagementProfileFilterLinksGetSecurity;
}
export declare class AnalyticsManagementProfileFilterLinksGetResponse extends SpeakeasyBase {
    contentType: string;
    profileFilterLink?: shared.ProfileFilterLink;
    statusCode: number;
}
