import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopExecutionXAmzTargetEnum {
    AwsStepFunctionsStopExecution = "AWSStepFunctions.StopExecution"
}
export declare class StopExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopExecutionXAmzTargetEnum;
}
export declare class StopExecutionRequest extends SpeakeasyBase {
    headers: StopExecutionHeaders;
    request: shared.StopExecutionInput;
}
export declare class StopExecutionResponse extends SpeakeasyBase {
    contentType: string;
    executionDoesNotExist?: any;
    invalidArn?: any;
    statusCode: number;
    stopExecutionOutput?: shared.StopExecutionOutput;
}
