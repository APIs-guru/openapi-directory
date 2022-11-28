import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSlotTypesPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    localeId: string;
}
export declare class ListSlotTypesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListSlotTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies attributes for sorting a list of slot types.
**/
export declare class ListSlotTypesRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.SlotTypeSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListSlotTypesRequestBody extends SpeakeasyBase {
    filters?: shared.SlotTypeFilter[];
    maxResults?: number;
    nextToken?: string;
    sortBy?: ListSlotTypesRequestBodySortBy;
}
export declare class ListSlotTypesRequest extends SpeakeasyBase {
    pathParams: ListSlotTypesPathParams;
    queryParams: ListSlotTypesQueryParams;
    headers: ListSlotTypesHeaders;
    request: ListSlotTypesRequestBody;
}
export declare class ListSlotTypesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listSlotTypesResponse?: shared.ListSlotTypesResponse;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
