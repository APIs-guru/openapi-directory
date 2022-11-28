import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfilesDeletePathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfilesDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementProfilesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfilesDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfilesDeletePathParams;
    queryParams: AnalyticsManagementProfilesDeleteQueryParams;
    security: AnalyticsManagementProfilesDeleteSecurity;
}
export declare class AnalyticsManagementProfilesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
