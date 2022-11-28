import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class AccesscontextmanagerAccessPoliciesGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccesscontextmanagerAccessPoliciesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams;
    queryParams: AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: AccesscontextmanagerAccessPoliciesGetIamPolicySecurity;
}
export declare class AccesscontextmanagerAccessPoliciesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
