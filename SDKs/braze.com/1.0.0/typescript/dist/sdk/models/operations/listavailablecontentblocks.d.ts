import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListAvailableContentBlocksQueryParams extends SpeakeasyBase {
    limit?: string;
    modifiedAfter?: string;
    modifiedBefore?: string;
    offset?: string;
}
export declare class ListAvailableContentBlocksRequest extends SpeakeasyBase {
    queryParams: ListAvailableContentBlocksQueryParams;
}
export declare class ListAvailableContentBlocksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
