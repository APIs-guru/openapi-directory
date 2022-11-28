import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartAutomationExecutionXAmzTargetEnum {
    AmazonSsmStartAutomationExecution = "AmazonSSM.StartAutomationExecution"
}
export declare class StartAutomationExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartAutomationExecutionXAmzTargetEnum;
}
export declare class StartAutomationExecutionRequest extends SpeakeasyBase {
    headers: StartAutomationExecutionHeaders;
    request: shared.StartAutomationExecutionRequest;
}
export declare class StartAutomationExecutionResponse extends SpeakeasyBase {
    automationDefinitionNotFoundException?: any;
    automationDefinitionVersionNotFoundException?: any;
    automationExecutionLimitExceededException?: any;
    contentType: string;
    idempotentParameterMismatch?: any;
    internalServerError?: any;
    invalidAutomationExecutionParametersException?: any;
    invalidTarget?: any;
    startAutomationExecutionResult?: shared.StartAutomationExecutionResult;
    statusCode: number;
}
