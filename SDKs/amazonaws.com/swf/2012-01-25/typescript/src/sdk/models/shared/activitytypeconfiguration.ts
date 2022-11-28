import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskList } from "./tasklist";



// ActivityTypeConfiguration
/** 
 * Configuration settings registered with the activity type.
**/
export class ActivityTypeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultTaskHeartbeatTimeout" })
  defaultTaskHeartbeatTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultTaskList" })
  defaultTaskList?: TaskList;

  @SpeakeasyMetadata({ data: "json, name=defaultTaskPriority" })
  defaultTaskPriority?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultTaskScheduleToCloseTimeout" })
  defaultTaskScheduleToCloseTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultTaskScheduleToStartTimeout" })
  defaultTaskScheduleToStartTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultTaskStartToCloseTimeout" })
  defaultTaskStartToCloseTimeout?: string;
}
