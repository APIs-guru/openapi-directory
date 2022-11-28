import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfileFilterLinksInsertPathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfileFilterLinksInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementProfileFilterLinksInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfileFilterLinksInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfileFilterLinksInsertPathParams;
    queryParams: AnalyticsManagementProfileFilterLinksInsertQueryParams;
    request?: shared.ProfileFilterLinkInput;
    security: AnalyticsManagementProfileFilterLinksInsertSecurity;
}
export declare class AnalyticsManagementProfileFilterLinksInsertResponse extends SpeakeasyBase {
    contentType: string;
    profileFilterLink?: shared.ProfileFilterLink;
    statusCode: number;
}
