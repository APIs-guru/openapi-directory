import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PendingTaskCount
/** 
 * Contains the count of tasks in a task list.
**/
export class PendingTaskCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=truncated" })
  truncated?: boolean;
}
