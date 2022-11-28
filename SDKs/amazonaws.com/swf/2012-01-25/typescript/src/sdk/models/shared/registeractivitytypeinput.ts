import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskList } from "./tasklist";



export class RegisterActivityTypeInput extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
