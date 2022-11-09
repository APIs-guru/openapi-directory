import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementWebpropertiesListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AnalyticsManagementWebpropertiesListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementWebpropertiesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebpropertiesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementWebpropertiesListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementWebpropertiesListSecurityOption1;
    option2?: AnalyticsManagementWebpropertiesListSecurityOption2;
}
export declare class AnalyticsManagementWebpropertiesListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementWebpropertiesListPathParams;
    queryParams: AnalyticsManagementWebpropertiesListQueryParams;
    security: AnalyticsManagementWebpropertiesListSecurity;
}
export declare class AnalyticsManagementWebpropertiesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
