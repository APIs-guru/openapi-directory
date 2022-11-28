import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPipelineExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPipelineExecutionsXAmzTargetEnum {
    SageMakerListPipelineExecutions = "SageMaker.ListPipelineExecutions"
}
export declare class ListPipelineExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPipelineExecutionsXAmzTargetEnum;
}
export declare class ListPipelineExecutionsRequest extends SpeakeasyBase {
    queryParams: ListPipelineExecutionsQueryParams;
    headers: ListPipelineExecutionsHeaders;
    request: shared.ListPipelineExecutionsRequest;
}
export declare class ListPipelineExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    listPipelineExecutionsResponse?: shared.ListPipelineExecutionsResponse;
    resourceNotFound?: any;
    statusCode: number;
}
