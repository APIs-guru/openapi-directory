import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebPropertyAdWordsLinksUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyAdWordsLinkId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebPropertyAdWordsLinksUpdatePathParams;
    queryParams: AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams;
    request?: shared.EntityAdWordsLink;
    security: AnalyticsManagementWebPropertyAdWordsLinksUpdateSecurity;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    entityAdWordsLink?: shared.EntityAdWordsLink;
    statusCode: number;
}
