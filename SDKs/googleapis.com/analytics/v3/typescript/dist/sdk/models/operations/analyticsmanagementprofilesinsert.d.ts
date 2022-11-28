import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfilesInsertPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfilesInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementProfilesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfilesInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfilesInsertPathParams;
    queryParams: AnalyticsManagementProfilesInsertQueryParams;
    request?: shared.ProfileInput;
    security: AnalyticsManagementProfilesInsertSecurity;
}
export declare class AnalyticsManagementProfilesInsertResponse extends SpeakeasyBase {
    contentType: string;
    profile?: shared.Profile;
    statusCode: number;
}
