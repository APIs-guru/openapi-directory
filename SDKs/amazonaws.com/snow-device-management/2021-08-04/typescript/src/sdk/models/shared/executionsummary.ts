import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionStateEnum } from "./executionstateenum";


// ExecutionSummary
/** 
 * The summary of a task execution on a specified device.
**/
export class ExecutionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionId" })
  executionId?: string;

  @Metadata({ data: "json, name=managedDeviceId" })
  managedDeviceId?: string;

  @Metadata({ data: "json, name=state" })
  state?: ExecutionStateEnum;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}
