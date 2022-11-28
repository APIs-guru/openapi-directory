import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFlaggedItemsSearchDirectionEnum {
    Before = "BEFORE",
    After = "AFTER"
}
export declare class GetFlaggedItemsQueryParams extends SpeakeasyBase {
    numberOfResults?: number;
    searchDirection: GetFlaggedItemsSearchDirectionEnum;
    searchPointer?: string;
    timestamp: Date;
}
export declare class GetFlaggedItemsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetFlaggedItemsRequest extends SpeakeasyBase {
    queryParams: GetFlaggedItemsQueryParams;
    security: GetFlaggedItemsSecurity;
}
export declare class GetFlaggedItemsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    flaggedItemsResult?: any;
    statusCode: number;
}
