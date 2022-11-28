import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposUpdateBranchProtectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions
/** 
 * Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
**/
export class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=teams" })
  teams?: string[];

  @SpeakeasyMetadata({ data: "json, name=users" })
  users?: string[];
}


// ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews
/** 
 * Require at least one approving review on a pull request, before merging. Set to `null` to disable.
**/
export class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dismiss_stale_reviews" })
  dismissStaleReviews?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dismissal_restrictions" })
  dismissalRestrictions?: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions;

  @SpeakeasyMetadata({ data: "json, name=require_code_owner_reviews" })
  requireCodeOwnerReviews?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required_approving_review_count" })
  requiredApprovingReviewCount?: number;
}


// ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks
/** 
 * Require status checks to pass before merging. Set to `null` to disable.
**/
export class ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts" })
  contexts: string[];

  @SpeakeasyMetadata({ data: "json, name=strict" })
  strict: boolean;
}


// ReposUpdateBranchProtectionRequestBodyRestrictions
/** 
 * Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
**/
export class ReposUpdateBranchProtectionRequestBodyRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apps" })
  apps?: string[];

  @SpeakeasyMetadata({ data: "json, name=teams" })
  teams: string[];

  @SpeakeasyMetadata({ data: "json, name=users" })
  users: string[];
}


export class ReposUpdateBranchProtectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_deletions" })
  allowDeletions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_force_pushes" })
  allowForcePushes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforce_admins" })
  enforceAdmins: boolean;

  @SpeakeasyMetadata({ data: "json, name=required_linear_history" })
  requiredLinearHistory?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required_pull_request_reviews" })
  requiredPullRequestReviews: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews;

  @SpeakeasyMetadata({ data: "json, name=required_status_checks" })
  requiredStatusChecks: ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks;

  @SpeakeasyMetadata({ data: "json, name=restrictions" })
  restrictions: ReposUpdateBranchProtectionRequestBodyRestrictions;
}


export class ReposUpdateBranchProtection415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ReposUpdateBranchProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposUpdateBranchProtectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateBranchProtectionRequestBody;
}


export class ReposUpdateBranchProtectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  protectedBranch?: shared.ProtectedBranch;

  @SpeakeasyMetadata()
  reposUpdateBranchProtection415ApplicationJsonObject?: ReposUpdateBranchProtection415ApplicationJson;

  @SpeakeasyMetadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
