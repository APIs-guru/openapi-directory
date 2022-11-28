import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReactionsDeleteForIssueCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    reactionId: number;
    repo: string;
}
export declare class ReactionsDeleteForIssueCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsDeleteForIssueCommentPathParams;
}
export declare class ReactionsDeleteForIssueCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
