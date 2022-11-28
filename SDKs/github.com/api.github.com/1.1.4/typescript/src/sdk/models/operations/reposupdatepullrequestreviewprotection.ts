import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposUpdatePullRequestReviewProtectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions
/** 
 * Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
**/
export class ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=teams" })
  teams?: string[];

  @SpeakeasyMetadata({ data: "json, name=users" })
  users?: string[];
}


export class ReposUpdatePullRequestReviewProtectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dismiss_stale_reviews" })
  dismissStaleReviews?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dismissal_restrictions" })
  dismissalRestrictions?: ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions;

  @SpeakeasyMetadata({ data: "json, name=require_code_owner_reviews" })
  requireCodeOwnerReviews?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required_approving_review_count" })
  requiredApprovingReviewCount?: number;
}


export class ReposUpdatePullRequestReviewProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposUpdatePullRequestReviewProtectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposUpdatePullRequestReviewProtectionRequestBody;
}


export class ReposUpdatePullRequestReviewProtectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protectedBranchPullRequestReview?: shared.ProtectedBranchPullRequestReview;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
