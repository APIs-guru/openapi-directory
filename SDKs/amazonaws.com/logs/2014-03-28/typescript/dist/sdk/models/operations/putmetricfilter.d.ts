import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutMetricFilterXAmzTargetEnum {
    Logs20140328PutMetricFilter = "Logs_20140328.PutMetricFilter"
}
export declare class PutMetricFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutMetricFilterXAmzTargetEnum;
}
export declare class PutMetricFilterRequest extends SpeakeasyBase {
    headers: PutMetricFilterHeaders;
    request: shared.PutMetricFilterRequest;
}
export declare class PutMetricFilterResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    limitExceededException?: any;
    operationAbortedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
