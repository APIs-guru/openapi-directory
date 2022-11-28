import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorldGenerationJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListWorldGenerationJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListWorldGenerationJobsRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListWorldGenerationJobsRequest extends SpeakeasyBase {
    queryParams: ListWorldGenerationJobsQueryParams;
    headers: ListWorldGenerationJobsHeaders;
    request: ListWorldGenerationJobsRequestBody;
}
export declare class ListWorldGenerationJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    listWorldGenerationJobsResponse?: shared.ListWorldGenerationJobsResponse;
    statusCode: number;
    throttlingException?: any;
}
