import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSlotsPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    intentId: string;
    localeId: string;
}
export declare class ListSlotsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListSlotsHeaders extends SpeakeasyBase {
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
export declare class ListSlotsRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.SlotSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListSlotsRequestBody extends SpeakeasyBase {
    filters?: shared.SlotFilter[];
    maxResults?: number;
    nextToken?: string;
    sortBy?: ListSlotsRequestBodySortBy;
}
export declare class ListSlotsRequest extends SpeakeasyBase {
    pathParams: ListSlotsPathParams;
    queryParams: ListSlotsQueryParams;
    headers: ListSlotsHeaders;
    request: ListSlotsRequestBody;
}
export declare class ListSlotsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listSlotsResponse?: shared.ListSlotsResponse;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
