import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopPipelineExecutionXAmzTargetEnum {
    SageMakerStopPipelineExecution = "SageMaker.StopPipelineExecution"
}
export declare class StopPipelineExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopPipelineExecutionXAmzTargetEnum;
}
export declare class StopPipelineExecutionRequest extends SpeakeasyBase {
    headers: StopPipelineExecutionHeaders;
    request: shared.StopPipelineExecutionRequest;
}
export declare class StopPipelineExecutionResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
    stopPipelineExecutionResponse?: shared.StopPipelineExecutionResponse;
}
