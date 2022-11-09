import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteResourcePolicyXAmzTargetEnum {
    Logs20140328DeleteResourcePolicy = "Logs_20140328.DeleteResourcePolicy"
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
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
