import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsCreateReviewCommentPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare enum PullsCreateReviewCommentRequestBodySideEnum {
    Left = "LEFT",
    Right = "RIGHT"
}
export declare enum PullsCreateReviewCommentRequestBodyStartSideEnum {
    Left = "LEFT",
    Right = "RIGHT",
    Side = "side"
}
export declare class PullsCreateReviewCommentRequestBody extends SpeakeasyBase {
    body: string;
    commitId?: string;
    inReplyTo?: number;
    line?: number;
    path?: string;
    position?: number;
    side?: PullsCreateReviewCommentRequestBodySideEnum;
    startLine?: number;
    startSide?: PullsCreateReviewCommentRequestBodyStartSideEnum;
}
export declare class PullsCreateReviewCommentRequest extends SpeakeasyBase {
    pathParams: PullsCreateReviewCommentPathParams;
    request?: PullsCreateReviewCommentRequestBody;
}
export declare class PullsCreateReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    pullRequestReviewComment?: shared.PullRequestReviewComment;
    validationError?: shared.ValidationError;
}
