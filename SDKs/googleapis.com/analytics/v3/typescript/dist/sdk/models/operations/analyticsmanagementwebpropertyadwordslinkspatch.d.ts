import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebPropertyAdWordsLinksPatchPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyAdWordsLinkId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksPatchRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebPropertyAdWordsLinksPatchPathParams;
    queryParams: AnalyticsManagementWebPropertyAdWordsLinksPatchQueryParams;
    request?: shared.EntityAdWordsLink;
    security: AnalyticsManagementWebPropertyAdWordsLinksPatchSecurity;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksPatchResponse extends SpeakeasyBase {
    contentType: string;
    entityAdWordsLink?: shared.EntityAdWordsLink;
    statusCode: number;
}
