import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PendingTaskCount
/** 
 * Contains the count of tasks in a task list.
**/
export class PendingTaskCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=truncated" })
  truncated?: boolean;
}
