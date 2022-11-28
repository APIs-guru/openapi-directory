import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendPipelineExecutionStepFailureXAmzTargetEnum {
    SageMakerSendPipelineExecutionStepFailure = "SageMaker.SendPipelineExecutionStepFailure"
}
export declare class SendPipelineExecutionStepFailureHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendPipelineExecutionStepFailureXAmzTargetEnum;
}
export declare class SendPipelineExecutionStepFailureRequest extends SpeakeasyBase {
    headers: SendPipelineExecutionStepFailureHeaders;
    request: shared.SendPipelineExecutionStepFailureRequest;
}
export declare class SendPipelineExecutionStepFailureResponse extends SpeakeasyBase {
    contentType: string;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    sendPipelineExecutionStepFailureResponse?: shared.SendPipelineExecutionStepFailureResponse;
    statusCode: number;
}
