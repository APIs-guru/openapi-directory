import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorldsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListWorldsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListWorldsRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListWorldsRequest extends SpeakeasyBase {
    queryParams: ListWorldsQueryParams;
    headers: ListWorldsHeaders;
    request: ListWorldsRequestBody;
}
export declare class ListWorldsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    listWorldsResponse?: shared.ListWorldsResponse;
    statusCode: number;
    throttlingException?: any;
}
