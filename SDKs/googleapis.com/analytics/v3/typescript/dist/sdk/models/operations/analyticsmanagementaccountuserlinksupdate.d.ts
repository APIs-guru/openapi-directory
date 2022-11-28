import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementAccountUserLinksUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    linkId: string;
}
export declare class AnalyticsManagementAccountUserLinksUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementAccountUserLinksUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementAccountUserLinksUpdateRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementAccountUserLinksUpdatePathParams;
    queryParams: AnalyticsManagementAccountUserLinksUpdateQueryParams;
    request?: shared.EntityUserLinkInput;
    security: AnalyticsManagementAccountUserLinksUpdateSecurity;
}
export declare class AnalyticsManagementAccountUserLinksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    entityUserLink?: shared.EntityUserLink;
    statusCode: number;
}
