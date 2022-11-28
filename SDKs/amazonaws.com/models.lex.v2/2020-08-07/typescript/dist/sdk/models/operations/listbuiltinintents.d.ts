import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBuiltInIntentsPathParams extends SpeakeasyBase {
    localeId: string;
}
export declare class ListBuiltInIntentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListBuiltInIntentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies attributes for sorting a list of built-in intents.
**/
export declare class ListBuiltInIntentsRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.BuiltInIntentSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListBuiltInIntentsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    sortBy?: ListBuiltInIntentsRequestBodySortBy;
}
export declare class ListBuiltInIntentsRequest extends SpeakeasyBase {
    pathParams: ListBuiltInIntentsPathParams;
    queryParams: ListBuiltInIntentsQueryParams;
    headers: ListBuiltInIntentsHeaders;
    request: ListBuiltInIntentsRequestBody;
}
export declare class ListBuiltInIntentsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listBuiltInIntentsResponse?: shared.ListBuiltInIntentsResponse;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
