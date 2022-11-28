import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetPullRequestReviewProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposGetPullRequestReviewProtectionRequest extends SpeakeasyBase {
    pathParams: ReposGetPullRequestReviewProtectionPathParams;
}
export declare class ReposGetPullRequestReviewProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protectedBranchPullRequestReview?: shared.ProtectedBranchPullRequestReview;
}
