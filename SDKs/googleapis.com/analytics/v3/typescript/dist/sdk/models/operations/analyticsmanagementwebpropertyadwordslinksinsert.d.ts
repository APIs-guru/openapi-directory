import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebPropertyAdWordsLinksInsertPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebPropertyAdWordsLinksInsertPathParams;
    queryParams: AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams;
    request?: shared.EntityAdWordsLink;
    security: AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksInsertResponse extends SpeakeasyBase {
    contentType: string;
    entityAdWordsLink?: shared.EntityAdWordsLink;
    statusCode: number;
}
