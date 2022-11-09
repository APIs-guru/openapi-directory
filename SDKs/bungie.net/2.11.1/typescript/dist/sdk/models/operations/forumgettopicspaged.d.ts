import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ForumGetTopicsPagedPathParams extends SpeakeasyBase {
    categoryFilter: number;
    group: number;
    page: number;
    pageSize: number;
    quickDate: number;
    sort: number;
}
export declare class ForumGetTopicsPagedQueryParams extends SpeakeasyBase {
    locales?: string;
    tagstring?: string;
}
export declare class ForumGetTopicsPagedRequest extends SpeakeasyBase {
    pathParams: ForumGetTopicsPagedPathParams;
    queryParams: ForumGetTopicsPagedQueryParams;
}
export declare class ForumGetTopicsPagedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
