import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Team } from "./team";
import { SimpleUser } from "./simpleuser";


export class ProtectedBranchPullRequestReviewDismissalRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=teams", elemType: shared.Team })
  teams?: Team[];

  @Metadata({ data: "json, name=teams_url" })
  teamsUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=users", elemType: shared.SimpleUser })
  users?: SimpleUser[];

  @Metadata({ data: "json, name=users_url" })
  usersUrl?: string;
}


// ProtectedBranchPullRequestReview
/** 
 * Protected Branch Pull Request Review
**/
export class ProtectedBranchPullRequestReview extends SpeakeasyBase {
  @Metadata({ data: "json, name=dismiss_stale_reviews" })
  dismissStaleReviews: boolean;

  @Metadata({ data: "json, name=dismissal_restrictions" })
  dismissalRestrictions?: ProtectedBranchPullRequestReviewDismissalRestrictions;

  @Metadata({ data: "json, name=require_code_owner_reviews" })
  requireCodeOwnerReviews: boolean;

  @Metadata({ data: "json, name=required_approving_review_count" })
  requiredApprovingReviewCount?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
