import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerAccessPoliciesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class AccesscontextmanagerAccessPoliciesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class AccesscontextmanagerAccessPoliciesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerAccessPoliciesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerAccessPoliciesSetIamPolicyPathParams;
    queryParams: AccesscontextmanagerAccessPoliciesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: AccesscontextmanagerAccessPoliciesSetIamPolicySecurity;
}
export declare class AccesscontextmanagerAccessPoliciesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
