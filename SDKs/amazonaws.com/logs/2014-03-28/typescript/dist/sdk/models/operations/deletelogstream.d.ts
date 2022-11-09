import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteLogStreamXAmzTargetEnum {
    Logs20140328DeleteLogStream = "Logs_20140328.DeleteLogStream"
}
export declare class DeleteLogStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLogStreamXAmzTargetEnum;
}
export declare class DeleteLogStreamRequest extends SpeakeasyBase {
    headers: DeleteLogStreamHeaders;
    request: shared.DeleteLogStreamRequest;
}
export declare class DeleteLogStreamResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    operationAbortedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
