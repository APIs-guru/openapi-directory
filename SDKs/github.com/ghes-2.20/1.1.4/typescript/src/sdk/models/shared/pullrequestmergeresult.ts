import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PullRequestMergeResult
/** 
 * Pull Request Merge Result
**/
export class PullRequestMergeResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=merged" })
  merged: boolean;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=sha" })
  sha: string;
}
