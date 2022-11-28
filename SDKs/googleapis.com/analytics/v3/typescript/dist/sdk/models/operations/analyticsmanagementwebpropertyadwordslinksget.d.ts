import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebPropertyAdWordsLinksGetPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyAdWordsLinkId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1;
    option2?: AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebPropertyAdWordsLinksGetPathParams;
    queryParams: AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams;
    security: AnalyticsManagementWebPropertyAdWordsLinksGetSecurity;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksGetResponse extends SpeakeasyBase {
    contentType: string;
    entityAdWordsLink?: shared.EntityAdWordsLink;
    statusCode: number;
}
