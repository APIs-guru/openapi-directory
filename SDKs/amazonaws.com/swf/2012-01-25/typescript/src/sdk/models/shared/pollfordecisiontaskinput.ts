import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskList } from "./tasklist";



export class PollForDecisionTaskInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "json, name=maximumPageSize" })
  maximumPageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reverseOrder" })
  reverseOrder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=taskList" })
  taskList: TaskList;
}
