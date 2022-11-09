import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskList } from "./tasklist";


export class PollForActivityTaskInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=identity" })
  identity?: string;

  @Metadata({ data: "json, name=taskList" })
  taskList: TaskList;
}
