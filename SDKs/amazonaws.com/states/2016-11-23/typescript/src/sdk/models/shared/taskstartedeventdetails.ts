import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TaskStartedEventDetails
/** 
 * Contains details about the start of a task during an execution.
**/
export class TaskStartedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: string;
}
