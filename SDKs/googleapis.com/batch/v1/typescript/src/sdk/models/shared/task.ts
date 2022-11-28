import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskStatus } from "./taskstatus";



// Task
/** 
 * A Cloud Batch task.
**/
export class Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TaskStatus;
}
