import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfileFilterLinksUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    linkId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfileFilterLinksUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementProfileFilterLinksUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfileFilterLinksUpdateRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfileFilterLinksUpdatePathParams;
    queryParams: AnalyticsManagementProfileFilterLinksUpdateQueryParams;
    request?: shared.ProfileFilterLinkInput;
    security: AnalyticsManagementProfileFilterLinksUpdateSecurity;
}
export declare class AnalyticsManagementProfileFilterLinksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    profileFilterLink?: shared.ProfileFilterLink;
    statusCode: number;
}
