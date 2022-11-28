import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfileUserLinksDeletePathParams extends SpeakeasyBase {
    accountId: string;
    linkId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfileUserLinksDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementProfileUserLinksDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfileUserLinksDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfileUserLinksDeletePathParams;
    queryParams: AnalyticsManagementProfileUserLinksDeleteQueryParams;
    security: AnalyticsManagementProfileUserLinksDeleteSecurity;
}
export declare class AnalyticsManagementProfileUserLinksDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
