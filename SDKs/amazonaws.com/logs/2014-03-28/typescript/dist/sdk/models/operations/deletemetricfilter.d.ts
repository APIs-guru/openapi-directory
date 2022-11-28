import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteMetricFilterXAmzTargetEnum {
    Logs20140328DeleteMetricFilter = "Logs_20140328.DeleteMetricFilter"
}
export declare class DeleteMetricFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMetricFilterXAmzTargetEnum;
}
export declare class DeleteMetricFilterRequest extends SpeakeasyBase {
    headers: DeleteMetricFilterHeaders;
    request: shared.DeleteMetricFilterRequest;
}
export declare class DeleteMetricFilterResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    operationAbortedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
