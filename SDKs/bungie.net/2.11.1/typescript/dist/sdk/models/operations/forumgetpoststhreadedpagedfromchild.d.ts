import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ForumGetPostsThreadedPagedFromChildPathParams extends SpeakeasyBase {
    childPostId: number;
    page: number;
    pageSize: number;
    replySize: number;
    rootThreadMode: boolean;
    sortMode: number;
}
export declare class ForumGetPostsThreadedPagedFromChildQueryParams extends SpeakeasyBase {
    showbanned?: string;
}
export declare class ForumGetPostsThreadedPagedFromChildRequest extends SpeakeasyBase {
    pathParams: ForumGetPostsThreadedPagedFromChildPathParams;
    queryParams: ForumGetPostsThreadedPagedFromChildQueryParams;
}
export declare class ForumGetPostsThreadedPagedFromChildResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
