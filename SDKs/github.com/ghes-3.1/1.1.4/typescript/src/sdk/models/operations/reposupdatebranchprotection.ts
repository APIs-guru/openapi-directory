import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposUpdateBranchProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions
/** 
 * Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
**/
export class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=teams" })
  teams?: string[];

  @Metadata({ data: "json, name=users" })
  users?: string[];
}


// ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews
/** 
 * Require at least one approving review on a pull request, before merging. Set to `null` to disable.
**/
export class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews extends SpeakeasyBase {
  @Metadata({ data: "json, name=dismiss_stale_reviews" })
  dismissStaleReviews?: boolean;

  @Metadata({ data: "json, name=dismissal_restrictions" })
  dismissalRestrictions?: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions;

  @Metadata({ data: "json, name=require_code_owner_reviews" })
  requireCodeOwnerReviews?: boolean;

  @Metadata({ data: "json, name=required_approving_review_count" })
  requiredApprovingReviewCount?: number;
}


// ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks
/** 
 * Require status checks to pass before merging. Set to `null` to disable.
**/
export class ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts" })
  contexts: string[];

  @Metadata({ data: "json, name=strict" })
  strict: boolean;
}


// ReposUpdateBranchProtectionRequestBodyRestrictions
/** 
 * Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
**/
export class ReposUpdateBranchProtectionRequestBodyRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps" })
  apps?: string[];

  @Metadata({ data: "json, name=teams" })
  teams: string[];

  @Metadata({ data: "json, name=users" })
  users: string[];
}


export class ReposUpdateBranchProtectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_deletions" })
  allowDeletions?: boolean;

  @Metadata({ data: "json, name=allow_force_pushes" })
  allowForcePushes?: boolean;

  @Metadata({ data: "json, name=enforce_admins" })
  enforceAdmins: boolean;

  @Metadata({ data: "json, name=required_linear_history" })
  requiredLinearHistory?: boolean;

  @Metadata({ data: "json, name=required_pull_request_reviews" })
  requiredPullRequestReviews: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews;

  @Metadata({ data: "json, name=required_status_checks" })
  requiredStatusChecks: ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks;

  @Metadata({ data: "json, name=restrictions" })
  restrictions: ReposUpdateBranchProtectionRequestBodyRestrictions;
}


export class ReposUpdateBranchProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposUpdateBranchProtectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateBranchProtectionRequestBody;
}


export class ReposUpdateBranchProtection415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ReposUpdateBranchProtectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  protectedBranch?: shared.ProtectedBranch;

  @Metadata()
  reposUpdateBranchProtection415ApplicationJsonObject?: ReposUpdateBranchProtection415ApplicationJson;

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
