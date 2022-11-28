import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Commit } from "./commit";
import { BranchProtection } from "./branchprotection";



export class BranchWithProtectionLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html" })
  html: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}


// BranchWithProtection
/** 
 * Branch With Protection
**/
export class BranchWithProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: BranchWithProtectionLinks;

  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit: Commit;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pattern" })
  pattern?: string;

  @SpeakeasyMetadata({ data: "json, name=protected" })
  protected: boolean;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection: BranchProtection;

  @SpeakeasyMetadata({ data: "json, name=protection_url" })
  protectionUrl: string;

  @SpeakeasyMetadata({ data: "json, name=required_approving_review_count" })
  requiredApprovingReviewCount?: number;
}
