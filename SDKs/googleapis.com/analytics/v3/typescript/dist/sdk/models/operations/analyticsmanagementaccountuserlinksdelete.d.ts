import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementAccountUserLinksDeletePathParams extends SpeakeasyBase {
    accountId: string;
    linkId: string;
}
export declare class AnalyticsManagementAccountUserLinksDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementAccountUserLinksDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementAccountUserLinksDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementAccountUserLinksDeletePathParams;
    queryParams: AnalyticsManagementAccountUserLinksDeleteQueryParams;
    security: AnalyticsManagementAccountUserLinksDeleteSecurity;
}
export declare class AnalyticsManagementAccountUserLinksDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
