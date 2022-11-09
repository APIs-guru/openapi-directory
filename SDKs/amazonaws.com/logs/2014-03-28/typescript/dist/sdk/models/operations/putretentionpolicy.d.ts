import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutRetentionPolicyXAmzTargetEnum {
    Logs20140328PutRetentionPolicy = "Logs_20140328.PutRetentionPolicy"
}
export declare class PutRetentionPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRetentionPolicyXAmzTargetEnum;
}
export declare class PutRetentionPolicyRequest extends SpeakeasyBase {
    headers: PutRetentionPolicyHeaders;
    request: shared.PutRetentionPolicyRequest;
}
export declare class PutRetentionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    operationAbortedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
