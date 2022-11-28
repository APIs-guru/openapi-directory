import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskExecution } from "./taskexecution";



// StatusEvent
/** 
 * Status event
**/
export class StatusEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=taskExecution" })
  taskExecution?: TaskExecution;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
