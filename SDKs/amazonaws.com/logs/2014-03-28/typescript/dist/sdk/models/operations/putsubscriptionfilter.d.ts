import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutSubscriptionFilterXAmzTargetEnum {
    Logs20140328PutSubscriptionFilter = "Logs_20140328.PutSubscriptionFilter"
}
export declare class PutSubscriptionFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutSubscriptionFilterXAmzTargetEnum;
}
export declare class PutSubscriptionFilterRequest extends SpeakeasyBase {
    headers: PutSubscriptionFilterHeaders;
    request: shared.PutSubscriptionFilterRequest;
}
export declare class PutSubscriptionFilterResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    limitExceededException?: any;
    operationAbortedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
