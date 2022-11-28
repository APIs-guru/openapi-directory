import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendWorkflowStepStateXAmzTargetEnum {
    TransferServiceSendWorkflowStepState = "TransferService.SendWorkflowStepState"
}
export declare class SendWorkflowStepStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendWorkflowStepStateXAmzTargetEnum;
}
export declare class SendWorkflowStepStateRequest extends SpeakeasyBase {
    headers: SendWorkflowStepStateHeaders;
    request: shared.SendWorkflowStepStateRequest;
}
export declare class SendWorkflowStepStateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    sendWorkflowStepStateResponse?: Map<string, any>;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
