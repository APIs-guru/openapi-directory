import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVideosIdCommentThreadsPathParams extends SpeakeasyBase {
    id: any;
}
export declare class PostVideosIdCommentThreadsRequestBody extends SpeakeasyBase {
    text: Map<string, any>;
}
export declare class PostVideosIdCommentThreadsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostVideosIdCommentThreadsRequest extends SpeakeasyBase {
    pathParams: PostVideosIdCommentThreadsPathParams;
    request?: PostVideosIdCommentThreadsRequestBody;
    security: PostVideosIdCommentThreadsSecurity;
}
export declare class PostVideosIdCommentThreadsResponse extends SpeakeasyBase {
    commentThreadPostResponse?: any;
    contentType: string;
    statusCode: number;
}
