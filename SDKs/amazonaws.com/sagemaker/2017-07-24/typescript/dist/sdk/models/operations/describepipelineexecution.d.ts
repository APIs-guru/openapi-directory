import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribePipelineExecutionXAmzTargetEnum {
    SageMakerDescribePipelineExecution = "SageMaker.DescribePipelineExecution"
}
export declare class DescribePipelineExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePipelineExecutionXAmzTargetEnum;
}
export declare class DescribePipelineExecutionRequest extends SpeakeasyBase {
    headers: DescribePipelineExecutionHeaders;
    request: shared.DescribePipelineExecutionRequest;
}
export declare class DescribePipelineExecutionResponse extends SpeakeasyBase {
    contentType: string;
    describePipelineExecutionResponse?: shared.DescribePipelineExecutionResponse;
    resourceNotFound?: any;
    statusCode: number;
}
