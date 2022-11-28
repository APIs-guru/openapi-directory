import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStateEnum } from "./executionstateenum";



// ExecutionSummary
/** 
 * The summary of a task execution on a specified device.
**/
export class ExecutionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=managedDeviceId" })
  managedDeviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ExecutionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
