import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsRemoveRequestedReviewersPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsRemoveRequestedReviewersRequestBody extends SpeakeasyBase {
    reviewers: string[];
    teamReviewers?: string[];
}
export declare class PullsRemoveRequestedReviewersRequest extends SpeakeasyBase {
    pathParams: PullsRemoveRequestedReviewersPathParams;
    request?: PullsRemoveRequestedReviewersRequestBody;
}
export declare class PullsRemoveRequestedReviewersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validationError?: shared.ValidationError;
}
