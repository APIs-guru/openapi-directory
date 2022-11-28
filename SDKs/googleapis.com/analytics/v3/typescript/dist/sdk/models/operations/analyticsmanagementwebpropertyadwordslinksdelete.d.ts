import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyAdWordsLinkId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams;
    queryParams: AnalyticsManagementWebPropertyAdWordsLinksDeleteQueryParams;
    security: AnalyticsManagementWebPropertyAdWordsLinksDeleteSecurity;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
