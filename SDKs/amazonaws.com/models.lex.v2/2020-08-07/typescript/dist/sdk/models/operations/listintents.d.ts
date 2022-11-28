import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListIntentsPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    localeId: string;
}
export declare class ListIntentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListIntentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies attributes for sorting a list of intents.
**/
export declare class ListIntentsRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.IntentSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListIntentsRequestBody extends SpeakeasyBase {
    filters?: shared.IntentFilter[];
    maxResults?: number;
    nextToken?: string;
    sortBy?: ListIntentsRequestBodySortBy;
}
export declare class ListIntentsRequest extends SpeakeasyBase {
    pathParams: ListIntentsPathParams;
    queryParams: ListIntentsQueryParams;
    headers: ListIntentsHeaders;
    request: ListIntentsRequestBody;
}
export declare class ListIntentsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listIntentsResponse?: shared.ListIntentsResponse;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
