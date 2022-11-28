import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebpropertyUserLinksListPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementWebpropertyUserLinksListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementWebpropertyUserLinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebpropertyUserLinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebpropertyUserLinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementWebpropertyUserLinksListSecurityOption1;
    option2?: AnalyticsManagementWebpropertyUserLinksListSecurityOption2;
}
export declare class AnalyticsManagementWebpropertyUserLinksListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebpropertyUserLinksListPathParams;
    queryParams: AnalyticsManagementWebpropertyUserLinksListQueryParams;
    security: AnalyticsManagementWebpropertyUserLinksListSecurity;
}
export declare class AnalyticsManagementWebpropertyUserLinksListResponse extends SpeakeasyBase {
    contentType: string;
    entityUserLinks?: shared.EntityUserLinks;
    statusCode: number;
}
