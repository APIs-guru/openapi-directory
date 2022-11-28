import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfilesPatchPathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfilesPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementProfilesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfilesPatchRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfilesPatchPathParams;
    queryParams: AnalyticsManagementProfilesPatchQueryParams;
    request?: shared.ProfileInput;
    security: AnalyticsManagementProfilesPatchSecurity;
}
export declare class AnalyticsManagementProfilesPatchResponse extends SpeakeasyBase {
    contentType: string;
    profile?: shared.Profile;
    statusCode: number;
}
