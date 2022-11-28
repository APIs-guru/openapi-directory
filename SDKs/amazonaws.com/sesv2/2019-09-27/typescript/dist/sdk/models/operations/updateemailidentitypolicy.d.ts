import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateEmailIdentityPolicyPathParams extends SpeakeasyBase {
    emailIdentity: string;
    policyName: string;
}
export declare class UpdateEmailIdentityPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateEmailIdentityPolicyRequestBody extends SpeakeasyBase {
    policy: string;
}
export declare class UpdateEmailIdentityPolicyRequest extends SpeakeasyBase {
    pathParams: UpdateEmailIdentityPolicyPathParams;
    headers: UpdateEmailIdentityPolicyHeaders;
    request: UpdateEmailIdentityPolicyRequestBody;
}
export declare class UpdateEmailIdentityPolicyResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateEmailIdentityPolicyResponse?: Map<string, any>;
}
