import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskList } from "./tasklist";


export class PollForDecisionTaskInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=identity" })
  identity?: string;

  @Metadata({ data: "json, name=maximumPageSize" })
  maximumPageSize?: number;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=reverseOrder" })
  reverseOrder?: boolean;

  @Metadata({ data: "json, name=taskList" })
  taskList: TaskList;
}
