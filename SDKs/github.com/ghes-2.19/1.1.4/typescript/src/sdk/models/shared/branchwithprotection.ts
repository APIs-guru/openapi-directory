import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Commit } from "./commit";
import { BranchProtection } from "./branchprotection";


export class BranchWithProtectionLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=html" })
  html: string;

  @Metadata({ data: "json, name=self" })
  self: string;
}


// BranchWithProtection
/** 
 * Branch With Protection
**/
export class BranchWithProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links: BranchWithProtectionLinks;

  @Metadata({ data: "json, name=commit" })
  commit: Commit;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pattern" })
  pattern?: string;

  @Metadata({ data: "json, name=protected" })
  protected: boolean;

  @Metadata({ data: "json, name=protection" })
  protection: BranchProtection;

  @Metadata({ data: "json, name=protection_url" })
  protectionUrl: string;

  @Metadata({ data: "json, name=required_approving_review_count" })
  requiredApprovingReviewCount?: number;
}
