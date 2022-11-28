import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebPropertyAdWordsLinksListPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startIndex?: number;
    userIp?: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1;
    option2?: AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebPropertyAdWordsLinksListPathParams;
    queryParams: AnalyticsManagementWebPropertyAdWordsLinksListQueryParams;
    security: AnalyticsManagementWebPropertyAdWordsLinksListSecurity;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksListResponse extends SpeakeasyBase {
    contentType: string;
    entityAdWordsLinks?: shared.EntityAdWordsLinks;
    statusCode: number;
}
