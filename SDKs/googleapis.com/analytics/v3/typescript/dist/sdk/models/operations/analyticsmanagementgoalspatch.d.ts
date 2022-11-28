import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementGoalsPatchPathParams extends SpeakeasyBase {
    accountId: string;
    goalId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementGoalsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementGoalsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementGoalsPatchRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementGoalsPatchPathParams;
    queryParams: AnalyticsManagementGoalsPatchQueryParams;
    request?: shared.Goal;
    security: AnalyticsManagementGoalsPatchSecurity;
}
export declare class AnalyticsManagementGoalsPatchResponse extends SpeakeasyBase {
    contentType: string;
    goal?: shared.Goal;
    statusCode: number;
}
