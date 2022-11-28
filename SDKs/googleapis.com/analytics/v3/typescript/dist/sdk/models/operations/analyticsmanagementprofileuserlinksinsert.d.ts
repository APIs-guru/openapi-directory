import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfileUserLinksInsertPathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfileUserLinksInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementProfileUserLinksInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfileUserLinksInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfileUserLinksInsertPathParams;
    queryParams: AnalyticsManagementProfileUserLinksInsertQueryParams;
    request?: shared.EntityUserLinkInput;
    security: AnalyticsManagementProfileUserLinksInsertSecurity;
}
export declare class AnalyticsManagementProfileUserLinksInsertResponse extends SpeakeasyBase {
    contentType: string;
    entityUserLink?: shared.EntityUserLink;
    statusCode: number;
}
