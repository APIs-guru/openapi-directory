import { SpeakeasyBase } from "../../../internal/utils";
import { Team } from "./team";
import { SimpleUser } from "./simpleuser";
export declare class ProtectedBranchPullRequestReviewDismissalRestrictions extends SpeakeasyBase {
    teams?: Team[];
    teamsUrl?: string;
    url?: string;
    users?: SimpleUser[];
    usersUrl?: string;
}
/**
 * Protected Branch Pull Request Review
**/
export declare class ProtectedBranchPullRequestReview extends SpeakeasyBase {
    dismissStaleReviews: boolean;
    dismissalRestrictions?: ProtectedBranchPullRequestReviewDismissalRestrictions;
    requireCodeOwnerReviews: boolean;
    requiredApprovingReviewCount?: number;
    url?: string;
}
