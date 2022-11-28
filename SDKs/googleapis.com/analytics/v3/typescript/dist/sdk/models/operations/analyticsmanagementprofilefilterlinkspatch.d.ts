import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfileFilterLinksPatchPathParams extends SpeakeasyBase {
    accountId: string;
    linkId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfileFilterLinksPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementProfileFilterLinksPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfileFilterLinksPatchRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfileFilterLinksPatchPathParams;
    queryParams: AnalyticsManagementProfileFilterLinksPatchQueryParams;
    request?: shared.ProfileFilterLinkInput;
    security: AnalyticsManagementProfileFilterLinksPatchSecurity;
}
export declare class AnalyticsManagementProfileFilterLinksPatchResponse extends SpeakeasyBase {
    contentType: string;
    profileFilterLink?: shared.ProfileFilterLink;
    statusCode: number;
}
