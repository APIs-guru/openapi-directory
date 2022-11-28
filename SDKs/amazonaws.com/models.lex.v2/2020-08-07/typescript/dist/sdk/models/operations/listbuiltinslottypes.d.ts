import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBuiltInSlotTypesPathParams extends SpeakeasyBase {
    localeId: string;
}
export declare class ListBuiltInSlotTypesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListBuiltInSlotTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies attributes for sorting a list of built-in slot types.
**/
export declare class ListBuiltInSlotTypesRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.BuiltInSlotTypeSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListBuiltInSlotTypesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    sortBy?: ListBuiltInSlotTypesRequestBodySortBy;
}
export declare class ListBuiltInSlotTypesRequest extends SpeakeasyBase {
    pathParams: ListBuiltInSlotTypesPathParams;
    queryParams: ListBuiltInSlotTypesQueryParams;
    headers: ListBuiltInSlotTypesHeaders;
    request: ListBuiltInSlotTypesRequestBody;
}
export declare class ListBuiltInSlotTypesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listBuiltInSlotTypesResponse?: shared.ListBuiltInSlotTypesResponse;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
