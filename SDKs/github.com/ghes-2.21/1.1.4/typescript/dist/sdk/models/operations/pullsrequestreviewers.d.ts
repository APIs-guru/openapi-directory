import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsRequestReviewersPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsRequestReviewersRequestBody extends SpeakeasyBase {
    reviewers?: string[];
    teamReviewers?: string[];
}
export declare class PullsRequestReviewersRequest extends SpeakeasyBase {
    pathParams: PullsRequestReviewersPathParams;
    request?: PullsRequestReviewersRequestBody;
}
export declare class PullsRequestReviewersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    pullRequestSimple?: shared.PullRequestSimple;
}
