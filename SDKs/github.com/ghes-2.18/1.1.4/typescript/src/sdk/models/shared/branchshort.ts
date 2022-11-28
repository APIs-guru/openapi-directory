import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BranchShortCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


// BranchShort
/** 
 * Branch Short
**/
export class BranchShort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit: BranchShortCommit;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protected" })
  protected: boolean;
}
