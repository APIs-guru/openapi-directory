import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBotVersionsPathParams extends SpeakeasyBase {
    botId: string;
}
export declare class ListBotVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListBotVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies attributes for sorting a list of bot versions.
**/
export declare class ListBotVersionsRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.BotVersionSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListBotVersionsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    sortBy?: ListBotVersionsRequestBodySortBy;
}
export declare class ListBotVersionsRequest extends SpeakeasyBase {
    pathParams: ListBotVersionsPathParams;
    queryParams: ListBotVersionsQueryParams;
    headers: ListBotVersionsHeaders;
    request: ListBotVersionsRequestBody;
}
export declare class ListBotVersionsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listBotVersionsResponse?: shared.ListBotVersionsResponse;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
