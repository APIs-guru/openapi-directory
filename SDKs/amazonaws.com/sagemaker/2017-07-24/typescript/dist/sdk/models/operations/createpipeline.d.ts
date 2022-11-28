import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePipelineXAmzTargetEnum {
    SageMakerCreatePipeline = "SageMaker.CreatePipeline"
}
export declare class CreatePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePipelineXAmzTargetEnum;
}
export declare class CreatePipelineRequest extends SpeakeasyBase {
    headers: CreatePipelineHeaders;
    request: shared.CreatePipelineRequest;
}
export declare class CreatePipelineResponse extends SpeakeasyBase {
    contentType: string;
    createPipelineResponse?: shared.CreatePipelineResponse;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    statusCode: number;
}
