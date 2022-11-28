import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementExperimentsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    experimentId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementExperimentsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementExperimentsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsUpdateSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementExperimentsUpdateSecurityOption1;
    option2?: AnalyticsManagementExperimentsUpdateSecurityOption2;
}
export declare class AnalyticsManagementExperimentsUpdateRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementExperimentsUpdatePathParams;
    queryParams: AnalyticsManagementExperimentsUpdateQueryParams;
    request?: shared.Experiment;
    security: AnalyticsManagementExperimentsUpdateSecurity;
}
export declare class AnalyticsManagementExperimentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    experiment?: shared.Experiment;
    statusCode: number;
}
