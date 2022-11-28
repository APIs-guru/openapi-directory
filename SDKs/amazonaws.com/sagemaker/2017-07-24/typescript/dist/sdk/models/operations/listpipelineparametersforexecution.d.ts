import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPipelineParametersForExecutionQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPipelineParametersForExecutionXAmzTargetEnum {
    SageMakerListPipelineParametersForExecution = "SageMaker.ListPipelineParametersForExecution"
}
export declare class ListPipelineParametersForExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPipelineParametersForExecutionXAmzTargetEnum;
}
export declare class ListPipelineParametersForExecutionRequest extends SpeakeasyBase {
    queryParams: ListPipelineParametersForExecutionQueryParams;
    headers: ListPipelineParametersForExecutionHeaders;
    request: shared.ListPipelineParametersForExecutionRequest;
}
export declare class ListPipelineParametersForExecutionResponse extends SpeakeasyBase {
    contentType: string;
    listPipelineParametersForExecutionResponse?: shared.ListPipelineParametersForExecutionResponse;
    resourceNotFound?: any;
    statusCode: number;
}
