import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListImportsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListImportsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Provides information for sorting a list of imports.
**/
export declare class ListImportsRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.ImportSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListImportsRequestBody extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    filters?: shared.ImportFilter[];
    maxResults?: number;
    nextToken?: string;
    sortBy?: ListImportsRequestBodySortBy;
}
export declare class ListImportsRequest extends SpeakeasyBase {
    queryParams: ListImportsQueryParams;
    headers: ListImportsHeaders;
    request: ListImportsRequestBody;
}
export declare class ListImportsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listImportsResponse?: shared.ListImportsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
