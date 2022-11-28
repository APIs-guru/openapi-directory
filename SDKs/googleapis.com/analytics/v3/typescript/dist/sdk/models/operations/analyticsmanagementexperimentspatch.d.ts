import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementExperimentsPatchPathParams extends SpeakeasyBase {
    accountId: string;
    experimentId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementExperimentsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementExperimentsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsPatchSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementExperimentsPatchSecurityOption1;
    option2?: AnalyticsManagementExperimentsPatchSecurityOption2;
}
export declare class AnalyticsManagementExperimentsPatchRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementExperimentsPatchPathParams;
    queryParams: AnalyticsManagementExperimentsPatchQueryParams;
    request?: shared.Experiment;
    security: AnalyticsManagementExperimentsPatchSecurity;
}
export declare class AnalyticsManagementExperimentsPatchResponse extends SpeakeasyBase {
    contentType: string;
    experiment?: shared.Experiment;
    statusCode: number;
}
