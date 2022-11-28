import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartPipelineExecutionXAmzTargetEnum {
    SageMakerStartPipelineExecution = "SageMaker.StartPipelineExecution"
}
export declare class StartPipelineExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartPipelineExecutionXAmzTargetEnum;
}
export declare class StartPipelineExecutionRequest extends SpeakeasyBase {
    headers: StartPipelineExecutionHeaders;
    request: shared.StartPipelineExecutionRequest;
}
export declare class StartPipelineExecutionResponse extends SpeakeasyBase {
    contentType: string;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    startPipelineExecutionResponse?: shared.StartPipelineExecutionResponse;
    statusCode: number;
}
