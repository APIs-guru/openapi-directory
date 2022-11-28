import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PullRequestMergeResult
/** 
 * Pull Request Merge Result
**/
export class PullRequestMergeResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=merged" })
  merged: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;
}
