import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideosIdCommentThreadsPathParams extends SpeakeasyBase {
    id: any;
}
export declare class GetVideosIdCommentThreadsQueryParams extends SpeakeasyBase {
    count?: number;
    sort?: shared.CommentsSortEnum;
    start?: number;
}
export declare class GetVideosIdCommentThreadsRequest extends SpeakeasyBase {
    pathParams: GetVideosIdCommentThreadsPathParams;
    queryParams: GetVideosIdCommentThreadsQueryParams;
}
export declare class GetVideosIdCommentThreadsResponse extends SpeakeasyBase {
    commentThreadResponse?: any;
    contentType: string;
    statusCode: number;
}
