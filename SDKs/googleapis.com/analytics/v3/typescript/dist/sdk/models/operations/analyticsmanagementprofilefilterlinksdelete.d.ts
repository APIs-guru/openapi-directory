import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementProfileFilterLinksDeletePathParams extends SpeakeasyBase {
    accountId: string;
    linkId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementProfileFilterLinksDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementProfileFilterLinksDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementProfileFilterLinksDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementProfileFilterLinksDeletePathParams;
    queryParams: AnalyticsManagementProfileFilterLinksDeleteQueryParams;
    security: AnalyticsManagementProfileFilterLinksDeleteSecurity;
}
export declare class AnalyticsManagementProfileFilterLinksDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
