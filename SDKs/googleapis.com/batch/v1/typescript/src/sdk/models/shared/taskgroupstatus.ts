import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatus } from "./instancestatus";



// TaskGroupStatus
/** 
 * Aggregated task status for a TaskGroup.
**/
export class TaskGroupStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=counts" })
  counts?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=instances", elemType: InstanceStatus })
  instances?: InstanceStatus[];
}
