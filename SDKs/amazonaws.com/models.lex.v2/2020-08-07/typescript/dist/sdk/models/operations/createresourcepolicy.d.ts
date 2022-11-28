import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateResourcePolicyPathParams extends SpeakeasyBase {
    resourceArn: string;
}
export declare class CreateResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateResourcePolicyRequestBody extends SpeakeasyBase {
    policy: string;
}
export declare class CreateResourcePolicyRequest extends SpeakeasyBase {
    pathParams: CreateResourcePolicyPathParams;
    headers: CreateResourcePolicyHeaders;
    request: CreateResourcePolicyRequestBody;
}
export declare class CreateResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    createResourcePolicyResponse?: shared.CreateResourcePolicyResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
