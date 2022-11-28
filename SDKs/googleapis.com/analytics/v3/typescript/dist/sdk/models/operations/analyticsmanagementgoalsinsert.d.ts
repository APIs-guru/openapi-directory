import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementGoalsInsertPathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementGoalsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementGoalsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementGoalsInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementGoalsInsertPathParams;
    queryParams: AnalyticsManagementGoalsInsertQueryParams;
    request?: shared.Goal;
    security: AnalyticsManagementGoalsInsertSecurity;
}
export declare class AnalyticsManagementGoalsInsertResponse extends SpeakeasyBase {
    contentType: string;
    goal?: shared.Goal;
    statusCode: number;
}
