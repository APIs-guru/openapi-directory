import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePipelineXAmzTargetEnum {
    SageMakerDeletePipeline = "SageMaker.DeletePipeline"
}
export declare class DeletePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePipelineXAmzTargetEnum;
}
export declare class DeletePipelineRequest extends SpeakeasyBase {
    headers: DeletePipelineHeaders;
    request: shared.DeletePipelineRequest;
}
export declare class DeletePipelineResponse extends SpeakeasyBase {
    contentType: string;
    deletePipelineResponse?: shared.DeletePipelineResponse;
    resourceNotFound?: any;
    statusCode: number;
}
