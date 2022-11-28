import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfileUserLinksUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    linkId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfileUserLinksUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementProfileUserLinksUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfileUserLinksUpdateRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfileUserLinksUpdatePathParams;
    queryParams: AnalyticsManagementProfileUserLinksUpdateQueryParams;
    request?: shared.EntityUserLinkInput;
    security: AnalyticsManagementProfileUserLinksUpdateSecurity;
}
export declare class AnalyticsManagementProfileUserLinksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    entityUserLink?: shared.EntityUserLink;
    statusCode: number;
}
