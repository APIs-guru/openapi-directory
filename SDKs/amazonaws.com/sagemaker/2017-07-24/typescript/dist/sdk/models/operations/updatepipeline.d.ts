import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePipelineXAmzTargetEnum {
    SageMakerUpdatePipeline = "SageMaker.UpdatePipeline"
}
export declare class UpdatePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePipelineXAmzTargetEnum;
}
export declare class UpdatePipelineRequest extends SpeakeasyBase {
    headers: UpdatePipelineHeaders;
    request: shared.UpdatePipelineRequest;
}
export declare class UpdatePipelineResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
    updatePipelineResponse?: shared.UpdatePipelineResponse;
}
