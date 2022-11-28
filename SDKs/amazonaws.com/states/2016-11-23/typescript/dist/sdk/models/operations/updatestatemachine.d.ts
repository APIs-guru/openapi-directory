import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateStateMachineXAmzTargetEnum {
    AwsStepFunctionsUpdateStateMachine = "AWSStepFunctions.UpdateStateMachine"
}
export declare class UpdateStateMachineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateStateMachineXAmzTargetEnum;
}
export declare class UpdateStateMachineRequest extends SpeakeasyBase {
    headers: UpdateStateMachineHeaders;
    request: shared.UpdateStateMachineInput;
}
export declare class UpdateStateMachineResponse extends SpeakeasyBase {
    contentType: string;
    invalidArn?: any;
    invalidDefinition?: any;
    invalidLoggingConfiguration?: any;
    invalidTracingConfiguration?: any;
    missingRequiredParameter?: any;
    stateMachineDeleting?: any;
    stateMachineDoesNotExist?: any;
    statusCode: number;
    updateStateMachineOutput?: shared.UpdateStateMachineOutput;
}
