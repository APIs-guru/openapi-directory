import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BranchProtection } from "./branchprotection";


export class ShortBranchCommit extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// ShortBranch
/** 
 * Short Branch
**/
export class ShortBranch extends SpeakeasyBase {
  @Metadata({ data: "json, name=commit" })
  commit: ShortBranchCommit;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protected" })
  protected: boolean;

  @Metadata({ data: "json, name=protection" })
  protection?: BranchProtection;

  @Metadata({ data: "json, name=protection_url" })
  protectionUrl?: string;
}
