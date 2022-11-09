import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CommitActivity
/** 
 * Commit Activity
**/
export class CommitActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=days" })
  days: number[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=week" })
  week: number;
}
