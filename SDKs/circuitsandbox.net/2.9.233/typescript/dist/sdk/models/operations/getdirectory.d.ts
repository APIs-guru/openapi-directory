import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDirectoryFilterEnum {
    None = "NONE",
    Joined = "JOINED",
    Requested = "REQUESTED",
    Open = "OPEN",
    Closed = "CLOSED",
    NotJoinedRequested = "NOT_JOINED_REQUESTED"
}
export declare enum GetDirectorySortByEnum {
    LastContent = "LAST_CONTENT",
    Name = "NAME",
    NumberOfUsers = "NUMBER_OF_USERS",
    CreationDate = "CREATION_DATE"
}
export declare enum GetDirectorySortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class GetDirectoryQueryParams extends SpeakeasyBase {
    filter: GetDirectoryFilterEnum;
    numberOfResults?: number;
    pagePointer?: string;
    query?: string;
    sortBy: GetDirectorySortByEnum;
    sortOrder: GetDirectorySortOrderEnum;
}
export declare class GetDirectorySecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetDirectoryRequest extends SpeakeasyBase {
    queryParams: GetDirectoryQueryParams;
    security: GetDirectorySecurity;
}
export declare class GetDirectoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    directoryResult?: any;
    statusCode: number;
}
