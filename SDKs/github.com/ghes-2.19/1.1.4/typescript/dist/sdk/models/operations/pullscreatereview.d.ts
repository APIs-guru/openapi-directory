import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsCreateReviewPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsCreateReviewRequestBodyComments extends SpeakeasyBase {
    body: string;
    line?: number;
    path: string;
    position?: number;
    side?: string;
    startLine?: number;
    startSide?: string;
}
export declare enum PullsCreateReviewRequestBodyEventEnum {
    Approve = "APPROVE",
    RequestChanges = "REQUEST_CHANGES",
    Comment = "COMMENT"
}
export declare class PullsCreateReviewRequestBody extends SpeakeasyBase {
    body?: string;
    comments?: PullsCreateReviewRequestBodyComments[];
    commitId?: string;
    event?: PullsCreateReviewRequestBodyEventEnum;
}
export declare class PullsCreateReviewRequest extends SpeakeasyBase {
    pathParams: PullsCreateReviewPathParams;
    request?: PullsCreateReviewRequestBody;
}
export declare class PullsCreateReviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    pullRequestReview?: shared.PullRequestReview;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
