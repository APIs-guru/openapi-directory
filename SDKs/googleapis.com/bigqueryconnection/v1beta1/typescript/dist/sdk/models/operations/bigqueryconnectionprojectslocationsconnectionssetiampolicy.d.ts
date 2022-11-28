import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity extends SpeakeasyBase {
    option1?: BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1;
    option2?: BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption2;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyPathParams;
    queryParams: BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
