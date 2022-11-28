import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPipelinesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPipelinesXAmzTargetEnum {
    SageMakerListPipelines = "SageMaker.ListPipelines"
}
export declare class ListPipelinesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPipelinesXAmzTargetEnum;
}
export declare class ListPipelinesRequest extends SpeakeasyBase {
    queryParams: ListPipelinesQueryParams;
    headers: ListPipelinesHeaders;
    request: shared.ListPipelinesRequest;
}
export declare class ListPipelinesResponse extends SpeakeasyBase {
    contentType: string;
    listPipelinesResponse?: shared.ListPipelinesResponse;
    statusCode: number;
}
