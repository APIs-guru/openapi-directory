import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateEmailIdentityPolicyPathParams extends SpeakeasyBase {
    emailIdentity: string;
    policyName: string;
}
export declare class CreateEmailIdentityPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateEmailIdentityPolicyRequestBody extends SpeakeasyBase {
    policy: string;
}
export declare class CreateEmailIdentityPolicyRequest extends SpeakeasyBase {
    pathParams: CreateEmailIdentityPolicyPathParams;
    headers: CreateEmailIdentityPolicyHeaders;
    request: CreateEmailIdentityPolicyRequestBody;
}
export declare class CreateEmailIdentityPolicyResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    badRequestException?: any;
    contentType: string;
    createEmailIdentityPolicyResponse?: Map<string, any>;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
