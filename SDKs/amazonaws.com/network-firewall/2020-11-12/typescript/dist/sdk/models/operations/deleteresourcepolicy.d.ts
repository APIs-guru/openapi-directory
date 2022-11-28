import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteResourcePolicyXAmzTargetEnum {
    NetworkFirewall20201112DeleteResourcePolicy = "NetworkFirewall_20201112.DeleteResourcePolicy"
}
export declare class DeleteResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourcePolicyXAmzTargetEnum;
}
export declare class DeleteResourcePolicyRequest extends SpeakeasyBase {
    headers: DeleteResourcePolicyHeaders;
    request: shared.DeleteResourcePolicyRequest;
}
export declare class DeleteResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    deleteResourcePolicyResponse?: Map<string, any>;
    internalServerError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
