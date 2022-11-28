import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteEmailIdentityPolicyPathParams extends SpeakeasyBase {
    emailIdentity: string;
    policyName: string;
}
export declare class DeleteEmailIdentityPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteEmailIdentityPolicyRequest extends SpeakeasyBase {
    pathParams: DeleteEmailIdentityPolicyPathParams;
    headers: DeleteEmailIdentityPolicyHeaders;
}
export declare class DeleteEmailIdentityPolicyResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteEmailIdentityPolicyResponse?: Map<string, any>;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
