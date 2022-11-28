import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Team } from "./team";
import { SimpleUser } from "./simpleuser";



export class ProtectedBranchPullRequestReviewDismissalRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=teams", elemType: Team })
  teams?: Team[];

  @SpeakeasyMetadata({ data: "json, name=teams_url" })
  teamsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: SimpleUser })
  users?: SimpleUser[];

  @SpeakeasyMetadata({ data: "json, name=users_url" })
  usersUrl?: string;
}


// ProtectedBranchPullRequestReview
/** 
 * Protected Branch Pull Request Review
**/
export class ProtectedBranchPullRequestReview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dismiss_stale_reviews" })
  dismissStaleReviews: boolean;

  @SpeakeasyMetadata({ data: "json, name=dismissal_restrictions" })
  dismissalRestrictions?: ProtectedBranchPullRequestReviewDismissalRestrictions;

  @SpeakeasyMetadata({ data: "json, name=require_code_owner_reviews" })
  requireCodeOwnerReviews: boolean;

  @SpeakeasyMetadata({ data: "json, name=required_approving_review_count" })
  requiredApprovingReviewCount?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
