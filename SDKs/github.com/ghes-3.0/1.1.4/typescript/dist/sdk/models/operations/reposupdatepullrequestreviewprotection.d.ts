import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposUpdatePullRequestReviewProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
/**
 * Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
**/
export declare class ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions extends SpeakeasyBase {
    teams?: string[];
    users?: string[];
}
export declare class ReposUpdatePullRequestReviewProtectionRequestBody extends SpeakeasyBase {
    dismissStaleReviews?: boolean;
    dismissalRestrictions?: ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions;
    requireCodeOwnerReviews?: boolean;
    requiredApprovingReviewCount?: number;
}
export declare class ReposUpdatePullRequestReviewProtectionRequest extends SpeakeasyBase {
    pathParams: ReposUpdatePullRequestReviewProtectionPathParams;
    request?: ReposUpdatePullRequestReviewProtectionRequestBody;
}
export declare class ReposUpdatePullRequestReviewProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protectedBranchPullRequestReview?: shared.ProtectedBranchPullRequestReview;
    validationError?: shared.ValidationError;
}
