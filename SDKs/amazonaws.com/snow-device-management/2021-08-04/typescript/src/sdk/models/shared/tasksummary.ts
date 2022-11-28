import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskStateEnum } from "./taskstateenum";



// TaskSummary
/** 
 * Information about the task assigned to one or many devices.
**/
export class TaskSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: TaskStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=taskArn" })
  taskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId: string;
}
