import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendPipelineExecutionStepSuccessXAmzTargetEnum {
    SageMakerSendPipelineExecutionStepSuccess = "SageMaker.SendPipelineExecutionStepSuccess"
}
export declare class SendPipelineExecutionStepSuccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendPipelineExecutionStepSuccessXAmzTargetEnum;
}
export declare class SendPipelineExecutionStepSuccessRequest extends SpeakeasyBase {
    headers: SendPipelineExecutionStepSuccessHeaders;
    request: shared.SendPipelineExecutionStepSuccessRequest;
}
export declare class SendPipelineExecutionStepSuccessResponse extends SpeakeasyBase {
    contentType: string;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    sendPipelineExecutionStepSuccessResponse?: shared.SendPipelineExecutionStepSuccessResponse;
    statusCode: number;
}
