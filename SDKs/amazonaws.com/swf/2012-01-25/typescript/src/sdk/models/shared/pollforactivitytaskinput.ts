import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskList } from "./tasklist";



export class PollForActivityTaskInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "json, name=taskList" })
  taskList: TaskList;
}
