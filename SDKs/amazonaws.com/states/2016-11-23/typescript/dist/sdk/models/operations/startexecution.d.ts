import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartExecutionXAmzTargetEnum {
    AwsStepFunctionsStartExecution = "AWSStepFunctions.StartExecution"
}
export declare class StartExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartExecutionXAmzTargetEnum;
}
export declare class StartExecutionRequest extends SpeakeasyBase {
    headers: StartExecutionHeaders;
    request: shared.StartExecutionInput;
}
export declare class StartExecutionResponse extends SpeakeasyBase {
    contentType: string;
    executionAlreadyExists?: any;
    executionLimitExceeded?: any;
    invalidArn?: any;
    invalidExecutionInput?: any;
    invalidName?: any;
    startExecutionOutput?: shared.StartExecutionOutput;
    stateMachineDeleting?: any;
    stateMachineDoesNotExist?: any;
    statusCode: number;
}
