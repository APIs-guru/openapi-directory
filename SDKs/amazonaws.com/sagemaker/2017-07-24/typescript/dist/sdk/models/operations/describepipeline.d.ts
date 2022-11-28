import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribePipelineXAmzTargetEnum {
    SageMakerDescribePipeline = "SageMaker.DescribePipeline"
}
export declare class DescribePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePipelineXAmzTargetEnum;
}
export declare class DescribePipelineRequest extends SpeakeasyBase {
    headers: DescribePipelineHeaders;
    request: shared.DescribePipelineRequest;
}
export declare class DescribePipelineResponse extends SpeakeasyBase {
    contentType: string;
    describePipelineResponse?: shared.DescribePipelineResponse;
    resourceNotFound?: any;
    statusCode: number;
}
