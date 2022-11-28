import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfilesGetPathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfilesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementProfilesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfilesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfilesGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementProfilesGetSecurityOption1;
    option2?: AnalyticsManagementProfilesGetSecurityOption2;
}
export declare class AnalyticsManagementProfilesGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfilesGetPathParams;
    queryParams: AnalyticsManagementProfilesGetQueryParams;
    security: AnalyticsManagementProfilesGetSecurity;
}
export declare class AnalyticsManagementProfilesGetResponse extends SpeakeasyBase {
    contentType: string;
    profile?: shared.Profile;
    statusCode: number;
}
