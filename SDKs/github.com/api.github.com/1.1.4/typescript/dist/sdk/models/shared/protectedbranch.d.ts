import { SpeakeasyBase } from "../../../internal/utils";
import { Team } from "./team";
import { SimpleUser } from "./simpleuser";
import { StatusCheckPolicy } from "./statuscheckpolicy";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";
export declare class ProtectedBranchAllowDeletions extends SpeakeasyBase {
    enabled: boolean;
}
export declare class ProtectedBranchAllowForcePushes extends SpeakeasyBase {
    enabled: boolean;
}
export declare class ProtectedBranchEnforceAdmins extends SpeakeasyBase {
    enabled: boolean;
    url: string;
}
export declare class ProtectedBranchRequiredLinearHistory extends SpeakeasyBase {
    enabled: boolean;
}
export declare class ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions extends SpeakeasyBase {
    teams: Team[];
    teamsUrl: string;
    url: string;
    users: SimpleUser[];
    usersUrl: string;
}
export declare class ProtectedBranchRequiredPullRequestReviews extends SpeakeasyBase {
    dismissStaleReviews?: boolean;
    dismissalRestrictions?: ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions;
    requireCodeOwnerReviews?: boolean;
    requiredApprovingReviewCount?: number;
    url: string;
}
export declare class ProtectedBranchRequiredSignatures extends SpeakeasyBase {
    enabled: boolean;
    url: string;
}
/**
 * Branch protections protect branches
**/
export declare class ProtectedBranch extends SpeakeasyBase {
    allowDeletions?: ProtectedBranchAllowDeletions;
    allowForcePushes?: ProtectedBranchAllowForcePushes;
    enforceAdmins?: ProtectedBranchEnforceAdmins;
    requiredLinearHistory?: ProtectedBranchRequiredLinearHistory;
    requiredPullRequestReviews?: ProtectedBranchRequiredPullRequestReviews;
    requiredSignatures?: ProtectedBranchRequiredSignatures;
    requiredStatusChecks?: StatusCheckPolicy;
    restrictions?: BranchRestrictionPolicy;
    url: string;
}
