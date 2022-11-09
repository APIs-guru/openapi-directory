import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteLogGroupXAmzTargetEnum {
    Logs20140328DeleteLogGroup = "Logs_20140328.DeleteLogGroup"
}
export declare class DeleteLogGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLogGroupXAmzTargetEnum;
}
export declare class DeleteLogGroupRequest extends SpeakeasyBase {
    headers: DeleteLogGroupHeaders;
    request: shared.DeleteLogGroupRequest;
}
export declare class DeleteLogGroupResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    operationAbortedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
