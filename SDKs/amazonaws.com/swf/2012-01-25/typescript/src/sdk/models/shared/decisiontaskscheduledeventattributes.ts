import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskList } from "./tasklist";



// DecisionTaskScheduledEventAttributes
/** 
 * Provides details about the <code>DecisionTaskScheduled</code> event.
**/
export class DecisionTaskScheduledEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startToCloseTimeout" })
  startToCloseTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=taskList" })
  taskList: TaskList;

  @SpeakeasyMetadata({ data: "json, name=taskPriority" })
  taskPriority?: string;
}
