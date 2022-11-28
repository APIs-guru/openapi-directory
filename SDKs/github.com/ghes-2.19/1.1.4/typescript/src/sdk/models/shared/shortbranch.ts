import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BranchProtection } from "./branchprotection";



export class ShortBranchCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


// ShortBranch
/** 
 * Short Branch
**/
export class ShortBranch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit: ShortBranchCommit;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protected" })
  protected: boolean;

  @SpeakeasyMetadata({ data: "json, name=protection" })
  protection?: BranchProtection;

  @SpeakeasyMetadata({ data: "json, name=protection_url" })
  protectionUrl?: string;
}
