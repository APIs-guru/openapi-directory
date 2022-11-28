import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementExperimentsGetPathParams extends SpeakeasyBase {
    accountId: string;
    experimentId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementExperimentsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementExperimentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementExperimentsGetSecurityOption1;
    option2?: AnalyticsManagementExperimentsGetSecurityOption2;
    option3?: AnalyticsManagementExperimentsGetSecurityOption3;
}
export declare class AnalyticsManagementExperimentsGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementExperimentsGetPathParams;
    queryParams: AnalyticsManagementExperimentsGetQueryParams;
    security: AnalyticsManagementExperimentsGetSecurity;
}
export declare class AnalyticsManagementExperimentsGetResponse extends SpeakeasyBase {
    contentType: string;
    experiment?: shared.Experiment;
    statusCode: number;
}
