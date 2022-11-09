import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskList } from "./tasklist";


// ActivityTypeConfiguration
/** 
 * Configuration settings registered with the activity type.
**/
export class ActivityTypeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultTaskHeartbeatTimeout" })
  defaultTaskHeartbeatTimeout?: string;

  @Metadata({ data: "json, name=defaultTaskList" })
  defaultTaskList?: TaskList;

  @Metadata({ data: "json, name=defaultTaskPriority" })
  defaultTaskPriority?: string;

  @Metadata({ data: "json, name=defaultTaskScheduleToCloseTimeout" })
  defaultTaskScheduleToCloseTimeout?: string;

  @Metadata({ data: "json, name=defaultTaskScheduleToStartTimeout" })
  defaultTaskScheduleToStartTimeout?: string;

  @Metadata({ data: "json, name=defaultTaskStartToCloseTimeout" })
  defaultTaskStartToCloseTimeout?: string;
}
