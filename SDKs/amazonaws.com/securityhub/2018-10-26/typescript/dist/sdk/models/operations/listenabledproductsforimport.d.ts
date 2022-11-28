import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEnabledProductsForImportQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListEnabledProductsForImportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEnabledProductsForImportRequest extends SpeakeasyBase {
    queryParams: ListEnabledProductsForImportQueryParams;
    headers: ListEnabledProductsForImportHeaders;
}
export declare class ListEnabledProductsForImportResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    limitExceededException?: any;
    listEnabledProductsForImportResponse?: shared.ListEnabledProductsForImportResponse;
    statusCode: number;
}
