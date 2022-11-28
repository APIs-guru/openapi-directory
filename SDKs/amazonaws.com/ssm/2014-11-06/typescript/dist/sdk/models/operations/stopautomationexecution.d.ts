import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopAutomationExecutionXAmzTargetEnum {
    AmazonSsmStopAutomationExecution = "AmazonSSM.StopAutomationExecution"
}
export declare class StopAutomationExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopAutomationExecutionXAmzTargetEnum;
}
export declare class StopAutomationExecutionRequest extends SpeakeasyBase {
    headers: StopAutomationExecutionHeaders;
    request: shared.StopAutomationExecutionRequest;
}
export declare class StopAutomationExecutionResponse extends SpeakeasyBase {
    automationExecutionNotFoundException?: any;
    contentType: string;
    internalServerError?: any;
    invalidAutomationStatusUpdateException?: any;
    statusCode: number;
    stopAutomationExecutionResult?: Map<string, any>;
}
