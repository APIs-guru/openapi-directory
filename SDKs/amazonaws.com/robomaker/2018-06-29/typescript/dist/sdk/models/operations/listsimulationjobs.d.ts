import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSimulationJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListSimulationJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSimulationJobsRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListSimulationJobsRequest extends SpeakeasyBase {
    queryParams: ListSimulationJobsQueryParams;
    headers: ListSimulationJobsHeaders;
    request: ListSimulationJobsRequestBody;
}
export declare class ListSimulationJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    listSimulationJobsResponse?: shared.ListSimulationJobsResponse;
    statusCode: number;
    throttlingException?: any;
}
