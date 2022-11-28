import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementAccountUserLinksInsertPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AnalyticsManagementAccountUserLinksInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementAccountUserLinksInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementAccountUserLinksInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementAccountUserLinksInsertPathParams;
    queryParams: AnalyticsManagementAccountUserLinksInsertQueryParams;
    request?: shared.EntityUserLinkInput;
    security: AnalyticsManagementAccountUserLinksInsertSecurity;
}
export declare class AnalyticsManagementAccountUserLinksInsertResponse extends SpeakeasyBase {
    contentType: string;
    entityUserLink?: shared.EntityUserLink;
    statusCode: number;
}
