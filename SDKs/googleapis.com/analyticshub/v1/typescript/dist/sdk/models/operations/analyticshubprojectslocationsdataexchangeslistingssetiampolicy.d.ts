import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicySecurity extends SpeakeasyBase {
    option1?: AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicySecurityOption1;
    option2?: AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicySecurityOption2;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicyPathParams;
    queryParams: AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicySecurity;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
