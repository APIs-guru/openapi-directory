import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsCreateReplyForReviewCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsCreateReplyForReviewCommentRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class PullsCreateReplyForReviewCommentRequest extends SpeakeasyBase {
    pathParams: PullsCreateReplyForReviewCommentPathParams;
    request?: PullsCreateReplyForReviewCommentRequestBody;
}
export declare class PullsCreateReplyForReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    pullRequestReviewComment?: shared.PullRequestReviewComment;
}
