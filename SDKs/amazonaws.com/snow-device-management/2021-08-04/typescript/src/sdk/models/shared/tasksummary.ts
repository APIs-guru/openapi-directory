import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskStateEnum } from "./taskstateenum";


// TaskSummary
/** 
 * Information about the task assigned to one or many devices.
**/
export class TaskSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: TaskStateEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=taskArn" })
  taskArn?: string;

  @Metadata({ data: "json, name=taskId" })
  taskId: string;
}
