import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskList } from "./tasklist";


export class RegisterActivityTypeInput extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
