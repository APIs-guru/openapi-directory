import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBotsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListBotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies attributes for sorting a list of bots.
**/
export declare class ListBotsRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.BotSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListBotsRequestBody extends SpeakeasyBase {
    filters?: shared.BotFilter[];
    maxResults?: number;
    nextToken?: string;
    sortBy?: ListBotsRequestBodySortBy;
}
export declare class ListBotsRequest extends SpeakeasyBase {
    queryParams: ListBotsQueryParams;
    headers: ListBotsHeaders;
    request: ListBotsRequestBody;
}
export declare class ListBotsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listBotsResponse?: shared.ListBotsResponse;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
