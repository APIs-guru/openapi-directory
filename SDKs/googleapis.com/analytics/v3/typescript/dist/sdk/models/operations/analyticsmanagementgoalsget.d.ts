import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementGoalsGetPathParams extends SpeakeasyBase {
    accountId: string;
    goalId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementGoalsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementGoalsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementGoalsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementGoalsGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementGoalsGetSecurityOption1;
    option2?: AnalyticsManagementGoalsGetSecurityOption2;
}
export declare class AnalyticsManagementGoalsGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementGoalsGetPathParams;
    queryParams: AnalyticsManagementGoalsGetQueryParams;
    security: AnalyticsManagementGoalsGetSecurity;
}
export declare class AnalyticsManagementGoalsGetResponse extends SpeakeasyBase {
    contentType: string;
    goal?: shared.Goal;
    statusCode: number;
}
