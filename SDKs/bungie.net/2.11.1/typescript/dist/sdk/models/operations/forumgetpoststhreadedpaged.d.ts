import { SpeakeasyBase } from "../../../internal/utils";
export declare class ForumGetPostsThreadedPagedPathParams extends SpeakeasyBase {
    getParentPost: boolean;
    page: number;
    pageSize: number;
    parentPostId: number;
    replySize: number;
    rootThreadMode: boolean;
    sortMode: number;
}
export declare class ForumGetPostsThreadedPagedQueryParams extends SpeakeasyBase {
    showbanned?: string;
}
export declare class ForumGetPostsThreadedPagedRequest extends SpeakeasyBase {
    pathParams: ForumGetPostsThreadedPagedPathParams;
    queryParams: ForumGetPostsThreadedPagedQueryParams;
}
export declare class ForumGetPostsThreadedPagedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
