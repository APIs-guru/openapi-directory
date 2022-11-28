import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfilesUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfilesUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementProfilesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfilesUpdateRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfilesUpdatePathParams;
    queryParams: AnalyticsManagementProfilesUpdateQueryParams;
    request?: shared.ProfileInput;
    security: AnalyticsManagementProfilesUpdateSecurity;
}
export declare class AnalyticsManagementProfilesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    profile?: shared.Profile;
    statusCode: number;
}
