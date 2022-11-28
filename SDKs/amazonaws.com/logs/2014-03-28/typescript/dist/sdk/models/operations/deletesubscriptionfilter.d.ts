import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSubscriptionFilterXAmzTargetEnum {
    Logs20140328DeleteSubscriptionFilter = "Logs_20140328.DeleteSubscriptionFilter"
}
export declare class DeleteSubscriptionFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSubscriptionFilterXAmzTargetEnum;
}
export declare class DeleteSubscriptionFilterRequest extends SpeakeasyBase {
    headers: DeleteSubscriptionFilterHeaders;
    request: shared.DeleteSubscriptionFilterRequest;
}
export declare class DeleteSubscriptionFilterResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    operationAbortedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
