import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskList } from "./tasklist";


export class CountPendingActivityTasksInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=taskList" })
  taskList: TaskList;
}
