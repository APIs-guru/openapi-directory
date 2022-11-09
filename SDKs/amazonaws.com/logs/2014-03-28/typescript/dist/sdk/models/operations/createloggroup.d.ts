import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateLogGroupXAmzTargetEnum {
    Logs20140328CreateLogGroup = "Logs_20140328.CreateLogGroup"
}
export declare class CreateLogGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLogGroupXAmzTargetEnum;
}
export declare class CreateLogGroupRequest extends SpeakeasyBase {
    headers: CreateLogGroupHeaders;
    request: shared.CreateLogGroupRequest;
}
export declare class CreateLogGroupResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    limitExceededException?: any;
    operationAbortedException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
