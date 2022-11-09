import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposUpdatePullRequestReviewProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions
/** 
 * Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
**/
export class ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=teams" })
  teams?: string[];

  @Metadata({ data: "json, name=users" })
  users?: string[];
}


export class ReposUpdatePullRequestReviewProtectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=dismiss_stale_reviews" })
  dismissStaleReviews?: boolean;

  @Metadata({ data: "json, name=dismissal_restrictions" })
  dismissalRestrictions?: ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions;

  @Metadata({ data: "json, name=require_code_owner_reviews" })
  requireCodeOwnerReviews?: boolean;

  @Metadata({ data: "json, name=required_approving_review_count" })
  requiredApprovingReviewCount?: number;
}


export class ReposUpdatePullRequestReviewProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposUpdatePullRequestReviewProtectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposUpdatePullRequestReviewProtectionRequestBody;
}


export class ReposUpdatePullRequestReviewProtectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protectedBranchPullRequestReview?: shared.ProtectedBranchPullRequestReview;

  @Metadata()
  validationError?: shared.ValidationError;
}
