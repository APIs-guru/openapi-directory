import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TaskStartFailedEventDetails
/** 
 * Contains details about a task that failed to start during an execution.
**/
export class TaskStartFailedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: string;
}
