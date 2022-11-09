import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskList } from "./tasklist";


// DecisionTaskScheduledEventAttributes
/** 
 * Provides details about the <code>DecisionTaskScheduled</code> event.
**/
export class DecisionTaskScheduledEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=startToCloseTimeout" })
  startToCloseTimeout?: string;

  @Metadata({ data: "json, name=taskList" })
  taskList: TaskList;

  @Metadata({ data: "json, name=taskPriority" })
  taskPriority?: string;
}
