import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartChangeRequestExecutionXAmzTargetEnum {
    AmazonSsmStartChangeRequestExecution = "AmazonSSM.StartChangeRequestExecution"
}
export declare class StartChangeRequestExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartChangeRequestExecutionXAmzTargetEnum;
}
export declare class StartChangeRequestExecutionRequest extends SpeakeasyBase {
    headers: StartChangeRequestExecutionHeaders;
    request: shared.StartChangeRequestExecutionRequest;
}
export declare class StartChangeRequestExecutionResponse extends SpeakeasyBase {
    automationDefinitionNotApprovedException?: any;
    automationDefinitionNotFoundException?: any;
    automationDefinitionVersionNotFoundException?: any;
    automationExecutionLimitExceededException?: any;
    contentType: string;
    idempotentParameterMismatch?: any;
    internalServerError?: any;
    invalidAutomationExecutionParametersException?: any;
    startChangeRequestExecutionResult?: shared.StartChangeRequestExecutionResult;
    statusCode: number;
}
