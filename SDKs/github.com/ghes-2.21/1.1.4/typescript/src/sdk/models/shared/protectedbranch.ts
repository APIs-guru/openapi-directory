import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Team } from "./team";
import { SimpleUser } from "./simpleuser";
import { StatusCheckPolicy } from "./statuscheckpolicy";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";



export class ProtectedBranchAllowDeletions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;
}


export class ProtectedBranchAllowForcePushes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;
}


export class ProtectedBranchEnforceAdmins extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class ProtectedBranchRequiredConversationResolution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class ProtectedBranchRequiredLinearHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;
}


export class ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=teams", elemType: Team })
  teams: Team[];

  @SpeakeasyMetadata({ data: "json, name=teams_url" })
  teamsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: SimpleUser })
  users: SimpleUser[];

  @SpeakeasyMetadata({ data: "json, name=users_url" })
  usersUrl: string;
}


export class ProtectedBranchRequiredPullRequestReviews extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dismiss_stale_reviews" })
  dismissStaleReviews?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dismissal_restrictions" })
  dismissalRestrictions?: ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions;

  @SpeakeasyMetadata({ data: "json, name=require_code_owner_reviews" })
  requireCodeOwnerReviews?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required_approving_review_count" })
  requiredApprovingReviewCount?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class ProtectedBranchRequiredSignatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


// ProtectedBranch
/** 
 * Branch protections protect branches
**/
export class ProtectedBranch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_deletions" })
  allowDeletions?: ProtectedBranchAllowDeletions;

  @SpeakeasyMetadata({ data: "json, name=allow_force_pushes" })
  allowForcePushes?: ProtectedBranchAllowForcePushes;

  @SpeakeasyMetadata({ data: "json, name=enforce_admins" })
  enforceAdmins?: ProtectedBranchEnforceAdmins;

  @SpeakeasyMetadata({ data: "json, name=required_conversation_resolution" })
  requiredConversationResolution?: ProtectedBranchRequiredConversationResolution;

  @SpeakeasyMetadata({ data: "json, name=required_linear_history" })
  requiredLinearHistory?: ProtectedBranchRequiredLinearHistory;

  @SpeakeasyMetadata({ data: "json, name=required_pull_request_reviews" })
  requiredPullRequestReviews?: ProtectedBranchRequiredPullRequestReviews;

  @SpeakeasyMetadata({ data: "json, name=required_signatures" })
  requiredSignatures?: ProtectedBranchRequiredSignatures;

  @SpeakeasyMetadata({ data: "json, name=required_status_checks" })
  requiredStatusChecks?: StatusCheckPolicy;

  @SpeakeasyMetadata({ data: "json, name=restrictions" })
  restrictions?: BranchRestrictionPolicy;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
