import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPipelineExecutionStepsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPipelineExecutionStepsXAmzTargetEnum {
    SageMakerListPipelineExecutionSteps = "SageMaker.ListPipelineExecutionSteps"
}
export declare class ListPipelineExecutionStepsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPipelineExecutionStepsXAmzTargetEnum;
}
export declare class ListPipelineExecutionStepsRequest extends SpeakeasyBase {
    queryParams: ListPipelineExecutionStepsQueryParams;
    headers: ListPipelineExecutionStepsHeaders;
    request: shared.ListPipelineExecutionStepsRequest;
}
export declare class ListPipelineExecutionStepsResponse extends SpeakeasyBase {
    contentType: string;
    listPipelineExecutionStepsResponse?: shared.ListPipelineExecutionStepsResponse;
    resourceNotFound?: any;
    statusCode: number;
}
