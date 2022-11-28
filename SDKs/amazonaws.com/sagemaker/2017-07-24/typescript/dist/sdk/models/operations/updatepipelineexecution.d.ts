import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePipelineExecutionXAmzTargetEnum {
    SageMakerUpdatePipelineExecution = "SageMaker.UpdatePipelineExecution"
}
export declare class UpdatePipelineExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePipelineExecutionXAmzTargetEnum;
}
export declare class UpdatePipelineExecutionRequest extends SpeakeasyBase {
    headers: UpdatePipelineExecutionHeaders;
    request: shared.UpdatePipelineExecutionRequest;
}
export declare class UpdatePipelineExecutionResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
    updatePipelineExecutionResponse?: shared.UpdatePipelineExecutionResponse;
}
