import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BranchShortCommit extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// BranchShort
/** 
 * Branch Short
**/
export class BranchShort extends SpeakeasyBase {
  @Metadata({ data: "json, name=commit" })
  commit: BranchShortCommit;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protected" })
  protected: boolean;
}
