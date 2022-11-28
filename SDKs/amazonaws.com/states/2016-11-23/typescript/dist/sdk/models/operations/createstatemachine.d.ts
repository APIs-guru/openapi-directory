import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateStateMachineXAmzTargetEnum {
    AwsStepFunctionsCreateStateMachine = "AWSStepFunctions.CreateStateMachine"
}
export declare class CreateStateMachineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStateMachineXAmzTargetEnum;
}
export declare class CreateStateMachineRequest extends SpeakeasyBase {
    headers: CreateStateMachineHeaders;
    request: shared.CreateStateMachineInput;
}
export declare class CreateStateMachineResponse extends SpeakeasyBase {
    contentType: string;
    createStateMachineOutput?: shared.CreateStateMachineOutput;
    invalidArn?: any;
    invalidDefinition?: any;
    invalidLoggingConfiguration?: any;
    invalidName?: any;
    invalidTracingConfiguration?: any;
    stateMachineAlreadyExists?: any;
    stateMachineDeleting?: any;
    stateMachineLimitExceeded?: any;
    stateMachineTypeNotSupported?: any;
    statusCode: number;
    tooManyTags?: any;
}
