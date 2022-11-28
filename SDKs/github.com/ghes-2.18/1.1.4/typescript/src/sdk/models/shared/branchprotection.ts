import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectedBranchAdminEnforced } from "./protectedbranchadminenforced";
import { ProtectedBranchPullRequestReview } from "./protectedbranchpullrequestreview";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";



export class BranchProtectionRequiredConversationResolution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class BranchProtectionRequiredSignatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class BranchProtectionRequiredStatusChecks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts" })
  contexts: string[];

  @SpeakeasyMetadata({ data: "json, name=contexts_url" })
  contextsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=enforcement_level" })
  enforcementLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// BranchProtection
/** 
 * Branch Protection
**/
export class BranchProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforce_admins" })
  enforceAdmins?: ProtectedBranchAdminEnforced;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protection_url" })
  protectionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=required_conversation_resolution" })
  requiredConversationResolution?: BranchProtectionRequiredConversationResolution;

  @SpeakeasyMetadata({ data: "json, name=required_pull_request_reviews" })
  requiredPullRequestReviews?: ProtectedBranchPullRequestReview;

  @SpeakeasyMetadata({ data: "json, name=required_signatures" })
  requiredSignatures?: BranchProtectionRequiredSignatures;

  @SpeakeasyMetadata({ data: "json, name=required_status_checks" })
  requiredStatusChecks?: BranchProtectionRequiredStatusChecks;

  @SpeakeasyMetadata({ data: "json, name=restrictions" })
  restrictions?: BranchRestrictionPolicy;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
