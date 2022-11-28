import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementGoalsListPathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementGoalsListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementGoalsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementGoalsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementGoalsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementGoalsListSecurityOption1;
    option2?: AnalyticsManagementGoalsListSecurityOption2;
}
export declare class AnalyticsManagementGoalsListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementGoalsListPathParams;
    queryParams: AnalyticsManagementGoalsListQueryParams;
    security: AnalyticsManagementGoalsListSecurity;
}
export declare class AnalyticsManagementGoalsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
