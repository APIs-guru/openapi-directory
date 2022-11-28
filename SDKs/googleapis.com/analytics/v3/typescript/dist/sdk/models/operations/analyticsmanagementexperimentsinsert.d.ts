import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementExperimentsInsertPathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementExperimentsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementExperimentsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsInsertSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementExperimentsInsertSecurityOption1;
    option2?: AnalyticsManagementExperimentsInsertSecurityOption2;
}
export declare class AnalyticsManagementExperimentsInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementExperimentsInsertPathParams;
    queryParams: AnalyticsManagementExperimentsInsertQueryParams;
    request?: shared.Experiment;
    security: AnalyticsManagementExperimentsInsertSecurity;
}
export declare class AnalyticsManagementExperimentsInsertResponse extends SpeakeasyBase {
    contentType: string;
    experiment?: shared.Experiment;
    statusCode: number;
}
