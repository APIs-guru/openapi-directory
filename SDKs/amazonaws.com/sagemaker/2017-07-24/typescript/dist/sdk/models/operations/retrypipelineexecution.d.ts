import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RetryPipelineExecutionXAmzTargetEnum {
    SageMakerRetryPipelineExecution = "SageMaker.RetryPipelineExecution"
}
export declare class RetryPipelineExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RetryPipelineExecutionXAmzTargetEnum;
}
export declare class RetryPipelineExecutionRequest extends SpeakeasyBase {
    headers: RetryPipelineExecutionHeaders;
    request: shared.RetryPipelineExecutionRequest;
}
export declare class RetryPipelineExecutionResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    retryPipelineExecutionResponse?: shared.RetryPipelineExecutionResponse;
    statusCode: number;
}
