import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurity extends SpeakeasyBase {
    option1?: AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption1;
    option2?: AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurityOption2;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyPathParams;
    queryParams: AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicySecurity;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
