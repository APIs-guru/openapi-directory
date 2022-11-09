import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity extends SpeakeasyBase {
    option1?: BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1;
    option2?: BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams;
    queryParams: BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
