import { SpeakeasyBase } from "../../../internal/utils";
export declare class ForumGetCoreTopicsPagedPathParams extends SpeakeasyBase {
    categoryFilter: number;
    page: number;
    quickDate: number;
    sort: number;
}
export declare class ForumGetCoreTopicsPagedQueryParams extends SpeakeasyBase {
    locales?: string;
}
export declare class ForumGetCoreTopicsPagedRequest extends SpeakeasyBase {
    pathParams: ForumGetCoreTopicsPagedPathParams;
    queryParams: ForumGetCoreTopicsPagedQueryParams;
}
export declare class ForumGetCoreTopicsPagedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
