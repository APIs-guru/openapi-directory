import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAutomationExecutionXAmzTargetEnum {
    AmazonSsmGetAutomationExecution = "AmazonSSM.GetAutomationExecution"
}
export declare class GetAutomationExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAutomationExecutionXAmzTargetEnum;
}
export declare class GetAutomationExecutionRequest extends SpeakeasyBase {
    headers: GetAutomationExecutionHeaders;
    request: shared.GetAutomationExecutionRequest;
}
export declare class GetAutomationExecutionResponse extends SpeakeasyBase {
    automationExecutionNotFoundException?: any;
    contentType: string;
    getAutomationExecutionResult?: shared.GetAutomationExecutionResult;
    internalServerError?: any;
    statusCode: number;
}
