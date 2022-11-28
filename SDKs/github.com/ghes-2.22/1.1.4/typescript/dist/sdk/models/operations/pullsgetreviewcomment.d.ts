import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsGetReviewCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare class PullsGetReviewCommentRequest extends SpeakeasyBase {
    pathParams: PullsGetReviewCommentPathParams;
}
export declare class PullsGetReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    pullRequestReviewComment?: shared.PullRequestReviewComment;
}
