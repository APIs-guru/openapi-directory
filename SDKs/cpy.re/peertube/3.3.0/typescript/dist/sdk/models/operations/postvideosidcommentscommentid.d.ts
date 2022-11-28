import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVideosIdCommentsCommentIdPathParams extends SpeakeasyBase {
    commentId: number;
    id: any;
}
export declare class PostVideosIdCommentsCommentIdRequestBody extends SpeakeasyBase {
    text: Map<string, any>;
}
export declare class PostVideosIdCommentsCommentIdSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostVideosIdCommentsCommentIdRequest extends SpeakeasyBase {
    pathParams: PostVideosIdCommentsCommentIdPathParams;
    request?: PostVideosIdCommentsCommentIdRequestBody;
    security: PostVideosIdCommentsCommentIdSecurity;
}
export declare class PostVideosIdCommentsCommentIdResponse extends SpeakeasyBase {
    commentThreadPostResponse?: any;
    contentType: string;
    statusCode: number;
}
