import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDeploymentJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListDeploymentJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDeploymentJobsRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDeploymentJobsRequest extends SpeakeasyBase {
    queryParams: ListDeploymentJobsQueryParams;
    headers: ListDeploymentJobsHeaders;
    request: ListDeploymentJobsRequestBody;
}
export declare class ListDeploymentJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    listDeploymentJobsResponse?: shared.ListDeploymentJobsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
