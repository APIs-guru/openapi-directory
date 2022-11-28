import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";


export enum AutoMergeMergeMethodEnum {
    Merge = "merge",
    Squash = "squash",
    Rebase = "rebase"
}


// AutoMerge
/** 
 * The status of auto merging a pull request.
**/
export class AutoMerge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commit_message" })
  commitMessage: string;

  @SpeakeasyMetadata({ data: "json, name=commit_title" })
  commitTitle: string;

  @SpeakeasyMetadata({ data: "json, name=enabled_by" })
  enabledBy: SimpleUser;

  @SpeakeasyMetadata({ data: "json, name=merge_method" })
  mergeMethod: AutoMergeMergeMethodEnum;
}
