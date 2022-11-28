import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementGoalsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    goalId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementGoalsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementGoalsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementGoalsUpdateRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementGoalsUpdatePathParams;
    queryParams: AnalyticsManagementGoalsUpdateQueryParams;
    request?: shared.Goal;
    security: AnalyticsManagementGoalsUpdateSecurity;
}
export declare class AnalyticsManagementGoalsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    goal?: shared.Goal;
    statusCode: number;
}
