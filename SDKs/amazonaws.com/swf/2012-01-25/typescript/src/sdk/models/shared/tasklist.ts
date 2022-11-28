import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TaskList
/** 
 * Represents a task list.
**/
export class TaskList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
