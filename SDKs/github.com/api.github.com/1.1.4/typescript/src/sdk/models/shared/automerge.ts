import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleUser } from "./simpleuser";

export enum AutoMergeMergeMethodEnum {
    Merge = "merge"
,    Squash = "squash"
,    Rebase = "rebase"
}


// AutoMerge
/** 
 * The status of auto merging a pull request.
**/
export class AutoMerge extends SpeakeasyBase {
  @Metadata({ data: "json, name=commit_message" })
  commitMessage: string;

  @Metadata({ data: "json, name=commit_title" })
  commitTitle: string;

  @Metadata({ data: "json, name=enabled_by" })
  enabledBy: SimpleUser;

  @Metadata({ data: "json, name=merge_method" })
  mergeMethod: AutoMergeMergeMethodEnum;
}
