import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribePipelineDefinitionForExecutionXAmzTargetEnum {
    SageMakerDescribePipelineDefinitionForExecution = "SageMaker.DescribePipelineDefinitionForExecution"
}
export declare class DescribePipelineDefinitionForExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePipelineDefinitionForExecutionXAmzTargetEnum;
}
export declare class DescribePipelineDefinitionForExecutionRequest extends SpeakeasyBase {
    headers: DescribePipelineDefinitionForExecutionHeaders;
    request: shared.DescribePipelineDefinitionForExecutionRequest;
}
export declare class DescribePipelineDefinitionForExecutionResponse extends SpeakeasyBase {
    contentType: string;
    describePipelineDefinitionForExecutionResponse?: shared.DescribePipelineDefinitionForExecutionResponse;
    resourceNotFound?: any;
    statusCode: number;
}
