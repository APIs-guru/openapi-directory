import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsListRequestedReviewersPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsListRequestedReviewersQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class PullsListRequestedReviewersRequest extends SpeakeasyBase {
    pathParams: PullsListRequestedReviewersPathParams;
    queryParams: PullsListRequestedReviewersQueryParams;
}
export declare class PullsListRequestedReviewersResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    pullRequestReviewRequest?: shared.PullRequestReviewRequest;
}
