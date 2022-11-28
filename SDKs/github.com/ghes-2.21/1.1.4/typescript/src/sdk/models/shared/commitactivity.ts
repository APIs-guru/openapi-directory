import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CommitActivity
/** 
 * Commit Activity
**/
export class CommitActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days" })
  days: number[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week: number;
}
