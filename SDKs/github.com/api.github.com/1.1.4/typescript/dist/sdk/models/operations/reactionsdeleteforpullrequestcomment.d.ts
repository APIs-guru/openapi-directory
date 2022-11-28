import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReactionsDeleteForPullRequestCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    reactionId: number;
    repo: string;
}
export declare class ReactionsDeleteForPullRequestCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsDeleteForPullRequestCommentPathParams;
}
export declare class ReactionsDeleteForPullRequestCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
