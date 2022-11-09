import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtectedBranchAdminEnforced } from "./protectedbranchadminenforced";
import { ProtectedBranchPullRequestReview } from "./protectedbranchpullrequestreview";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";


export class BranchProtectionAllowDeletions extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class BranchProtectionAllowForcePushes extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class BranchProtectionRequiredLinearHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class BranchProtectionRequiredStatusChecks extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts" })
  contexts: string[];

  @Metadata({ data: "json, name=contexts_url" })
  contextsUrl?: string;

  @Metadata({ data: "json, name=enforcement_level" })
  enforcementLevel: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// BranchProtection
/** 
 * Branch Protection
**/
export class BranchProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_deletions" })
  allowDeletions?: BranchProtectionAllowDeletions;

  @Metadata({ data: "json, name=allow_force_pushes" })
  allowForcePushes?: BranchProtectionAllowForcePushes;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=enforce_admins" })
  enforceAdmins?: ProtectedBranchAdminEnforced;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protection_url" })
  protectionUrl?: string;

  @Metadata({ data: "json, name=required_linear_history" })
  requiredLinearHistory?: BranchProtectionRequiredLinearHistory;

  @Metadata({ data: "json, name=required_pull_request_reviews" })
  requiredPullRequestReviews?: ProtectedBranchPullRequestReview;

  @Metadata({ data: "json, name=required_status_checks" })
  requiredStatusChecks: BranchProtectionRequiredStatusChecks;

  @Metadata({ data: "json, name=restrictions" })
  restrictions?: BranchRestrictionPolicy;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
