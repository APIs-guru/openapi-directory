import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartSyncExecutionXAmzTargetEnum {
    AwsStepFunctionsStartSyncExecution = "AWSStepFunctions.StartSyncExecution"
}
export declare class StartSyncExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSyncExecutionXAmzTargetEnum;
}
export declare class StartSyncExecutionRequest extends SpeakeasyBase {
    headers: StartSyncExecutionHeaders;
    request: shared.StartSyncExecutionInput;
}
export declare class StartSyncExecutionResponse extends SpeakeasyBase {
    contentType: string;
    invalidArn?: any;
    invalidExecutionInput?: any;
    invalidName?: any;
    startSyncExecutionOutput?: shared.StartSyncExecutionOutput;
    stateMachineDeleting?: any;
    stateMachineDoesNotExist?: any;
    stateMachineTypeNotSupported?: any;
    statusCode: number;
}
