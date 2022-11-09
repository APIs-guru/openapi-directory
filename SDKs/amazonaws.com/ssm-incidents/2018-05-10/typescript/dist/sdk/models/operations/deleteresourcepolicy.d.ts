import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteResourcePolicyRequestBody extends SpeakeasyBase {
    policyId: string;
    resourceArn: string;
}
export declare class DeleteResourcePolicyRequest extends SpeakeasyBase {
    headers: DeleteResourcePolicyHeaders;
    request: DeleteResourcePolicyRequestBody;
}
export declare class DeleteResourcePolicyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteResourcePolicyOutput?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
