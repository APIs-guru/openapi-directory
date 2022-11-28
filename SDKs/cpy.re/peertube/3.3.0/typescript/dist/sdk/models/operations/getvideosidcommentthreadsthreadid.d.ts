import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVideosIdCommentThreadsThreadIdPathParams extends SpeakeasyBase {
    id: any;
    threadId: number;
}
export declare class GetVideosIdCommentThreadsThreadIdRequest extends SpeakeasyBase {
    pathParams: GetVideosIdCommentThreadsThreadIdPathParams;
}
export declare class GetVideosIdCommentThreadsThreadIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoCommentThreadTree?: any;
}
