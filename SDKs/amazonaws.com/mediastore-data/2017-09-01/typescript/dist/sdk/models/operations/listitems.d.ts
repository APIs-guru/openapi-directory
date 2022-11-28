import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListItemsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    path?: string;
}
export declare class ListItemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListItemsRequest extends SpeakeasyBase {
    queryParams: ListItemsQueryParams;
    headers: ListItemsHeaders;
}
export declare class ListItemsResponse extends SpeakeasyBase {
    containerNotFoundException?: any;
    contentType: string;
    internalServerError?: any;
    listItemsResponse?: shared.ListItemsResponse;
    statusCode: number;
}
