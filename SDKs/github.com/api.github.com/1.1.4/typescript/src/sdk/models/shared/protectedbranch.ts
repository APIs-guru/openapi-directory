import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Team } from "./team";
import { SimpleUser } from "./simpleuser";
import { StatusCheckPolicy } from "./statuscheckpolicy";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";


export class ProtectedBranchAllowDeletions extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;
}


export class ProtectedBranchAllowForcePushes extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;
}


export class ProtectedBranchEnforceAdmins extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class ProtectedBranchRequiredLinearHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;
}


export class ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=teams", elemType: shared.Team })
  teams: Team[];

  @Metadata({ data: "json, name=teams_url" })
  teamsUrl: string;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=users", elemType: shared.SimpleUser })
  users: SimpleUser[];

  @Metadata({ data: "json, name=users_url" })
  usersUrl: string;
}


export class ProtectedBranchRequiredPullRequestReviews extends SpeakeasyBase {
  @Metadata({ data: "json, name=dismiss_stale_reviews" })
  dismissStaleReviews?: boolean;

  @Metadata({ data: "json, name=dismissal_restrictions" })
  dismissalRestrictions?: ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions;

  @Metadata({ data: "json, name=require_code_owner_reviews" })
  requireCodeOwnerReviews?: boolean;

  @Metadata({ data: "json, name=required_approving_review_count" })
  requiredApprovingReviewCount?: number;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class ProtectedBranchRequiredSignatures extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// ProtectedBranch
/** 
 * Branch protections protect branches
**/
export class ProtectedBranch extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_deletions" })
  allowDeletions?: ProtectedBranchAllowDeletions;

  @Metadata({ data: "json, name=allow_force_pushes" })
  allowForcePushes?: ProtectedBranchAllowForcePushes;

  @Metadata({ data: "json, name=enforce_admins" })
  enforceAdmins?: ProtectedBranchEnforceAdmins;

  @Metadata({ data: "json, name=required_linear_history" })
  requiredLinearHistory?: ProtectedBranchRequiredLinearHistory;

  @Metadata({ data: "json, name=required_pull_request_reviews" })
  requiredPullRequestReviews?: ProtectedBranchRequiredPullRequestReviews;

  @Metadata({ data: "json, name=required_signatures" })
  requiredSignatures?: ProtectedBranchRequiredSignatures;

  @Metadata({ data: "json, name=required_status_checks" })
  requiredStatusChecks?: StatusCheckPolicy;

  @Metadata({ data: "json, name=restrictions" })
  restrictions?: BranchRestrictionPolicy;

  @Metadata({ data: "json, name=url" })
  url: string;
}
