import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectedBranchAdminEnforced } from "./protectedbranchadminenforced";
import { ProtectedBranchPullRequestReview } from "./protectedbranchpullrequestreview";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";
export declare class BranchProtectionAllowDeletions extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class BranchProtectionAllowForcePushes extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class BranchProtectionRequiredLinearHistory extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class BranchProtectionRequiredStatusChecks extends SpeakeasyBase {
    contexts: string[];
    contextsUrl?: string;
    enforcementLevel: string;
    url?: string;
}
/**
 * Branch Protection
**/
export declare class BranchProtection extends SpeakeasyBase {
    allowDeletions?: BranchProtectionAllowDeletions;
    allowForcePushes?: BranchProtectionAllowForcePushes;
    enabled: boolean;
    enforceAdmins?: ProtectedBranchAdminEnforced;
    name?: string;
    protectionUrl?: string;
    requiredLinearHistory?: BranchProtectionRequiredLinearHistory;
    requiredPullRequestReviews?: ProtectedBranchPullRequestReview;
    requiredStatusChecks: BranchProtectionRequiredStatusChecks;
    restrictions?: BranchRestrictionPolicy;
    url?: string;
}
