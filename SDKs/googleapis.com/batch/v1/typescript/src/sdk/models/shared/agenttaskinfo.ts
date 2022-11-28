import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskStatus } from "./taskstatus";



// AgentTaskInfo
/** 
 * Task Info
**/
export class AgentTaskInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runnable" })
  runnable?: string;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;

  @SpeakeasyMetadata({ data: "json, name=taskStatus" })
  taskStatus?: TaskStatus;
}
