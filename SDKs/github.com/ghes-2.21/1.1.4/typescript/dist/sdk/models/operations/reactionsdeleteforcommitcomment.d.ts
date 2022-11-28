import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReactionsDeleteForCommitCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    reactionId: number;
    repo: string;
}
export declare class ReactionsDeleteForCommitCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsDeleteForCommitCommentPathParams;
}
export declare class ReactionsDeleteForCommitCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
