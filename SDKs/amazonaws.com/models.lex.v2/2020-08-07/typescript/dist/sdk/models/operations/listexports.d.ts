import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListExportsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListExportsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Provides information about sorting a list of exports.
**/
export declare class ListExportsRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.ExportSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListExportsRequestBody extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    filters?: shared.ExportFilter[];
    maxResults?: number;
    nextToken?: string;
    sortBy?: ListExportsRequestBodySortBy;
}
export declare class ListExportsRequest extends SpeakeasyBase {
    queryParams: ListExportsQueryParams;
    headers: ListExportsHeaders;
    request: ListExportsRequestBody;
}
export declare class ListExportsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listExportsResponse?: shared.ListExportsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
