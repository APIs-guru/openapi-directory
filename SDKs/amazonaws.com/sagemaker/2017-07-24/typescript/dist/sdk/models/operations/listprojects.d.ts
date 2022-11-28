import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProjectsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListProjectsXAmzTargetEnum {
    SageMakerListProjects = "SageMaker.ListProjects"
}
export declare class ListProjectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProjectsXAmzTargetEnum;
}
export declare class ListProjectsRequest extends SpeakeasyBase {
    queryParams: ListProjectsQueryParams;
    headers: ListProjectsHeaders;
    request: shared.ListProjectsInput;
}
export declare class ListProjectsResponse extends SpeakeasyBase {
    contentType: string;
    listProjectsOutput?: shared.ListProjectsOutput;
    statusCode: number;
}
