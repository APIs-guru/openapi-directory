import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorldExportJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListWorldExportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListWorldExportJobsRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListWorldExportJobsRequest extends SpeakeasyBase {
    queryParams: ListWorldExportJobsQueryParams;
    headers: ListWorldExportJobsHeaders;
    request: ListWorldExportJobsRequestBody;
}
export declare class ListWorldExportJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    listWorldExportJobsResponse?: shared.ListWorldExportJobsResponse;
    statusCode: number;
    throttlingException?: any;
}
