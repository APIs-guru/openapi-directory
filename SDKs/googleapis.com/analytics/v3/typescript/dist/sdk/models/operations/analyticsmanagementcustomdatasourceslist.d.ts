import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementCustomDataSourcesListPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomDataSourcesListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementCustomDataSourcesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomDataSourcesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomDataSourcesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementCustomDataSourcesListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementCustomDataSourcesListSecurityOption1;
    option2?: AnalyticsManagementCustomDataSourcesListSecurityOption2;
    option3?: AnalyticsManagementCustomDataSourcesListSecurityOption3;
}
export declare class AnalyticsManagementCustomDataSourcesListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementCustomDataSourcesListPathParams;
    queryParams: AnalyticsManagementCustomDataSourcesListQueryParams;
    security: AnalyticsManagementCustomDataSourcesListSecurity;
}
export declare class AnalyticsManagementCustomDataSourcesListResponse extends SpeakeasyBase {
    contentType: string;
    customDataSources?: shared.CustomDataSources;
    statusCode: number;
}
