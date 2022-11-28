import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBotLocalesPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
}
export declare class ListBotLocalesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListBotLocalesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies attributes for sorting a list of bot locales.
**/
export declare class ListBotLocalesRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.BotLocaleSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListBotLocalesRequestBody extends SpeakeasyBase {
    filters?: shared.BotLocaleFilter[];
    maxResults?: number;
    nextToken?: string;
    sortBy?: ListBotLocalesRequestBodySortBy;
}
export declare class ListBotLocalesRequest extends SpeakeasyBase {
    pathParams: ListBotLocalesPathParams;
    queryParams: ListBotLocalesQueryParams;
    headers: ListBotLocalesHeaders;
    request: ListBotLocalesRequestBody;
}
export declare class ListBotLocalesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listBotLocalesResponse?: shared.ListBotLocalesResponse;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
