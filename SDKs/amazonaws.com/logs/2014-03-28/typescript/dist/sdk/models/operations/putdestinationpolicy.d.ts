import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutDestinationPolicyXAmzTargetEnum {
    Logs20140328PutDestinationPolicy = "Logs_20140328.PutDestinationPolicy"
}
export declare class PutDestinationPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutDestinationPolicyXAmzTargetEnum;
}
export declare class PutDestinationPolicyRequest extends SpeakeasyBase {
    headers: PutDestinationPolicyHeaders;
    request: shared.PutDestinationPolicyRequest;
}
export declare class PutDestinationPolicyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    operationAbortedException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
