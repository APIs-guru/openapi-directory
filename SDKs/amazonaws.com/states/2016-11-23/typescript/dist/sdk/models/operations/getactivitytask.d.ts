import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetActivityTaskXAmzTargetEnum {
    AwsStepFunctionsGetActivityTask = "AWSStepFunctions.GetActivityTask"
}
export declare class GetActivityTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetActivityTaskXAmzTargetEnum;
}
export declare class GetActivityTaskRequest extends SpeakeasyBase {
    headers: GetActivityTaskHeaders;
    request: shared.GetActivityTaskInput;
}
export declare class GetActivityTaskResponse extends SpeakeasyBase {
    activityDoesNotExist?: any;
    activityWorkerLimitExceeded?: any;
    contentType: string;
    getActivityTaskOutput?: shared.GetActivityTaskOutput;
    invalidArn?: any;
    statusCode: number;
}
