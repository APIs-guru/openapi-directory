import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TaskList
/** 
 * Represents a task list.
**/
export class TaskList extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
