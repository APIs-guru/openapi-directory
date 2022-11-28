import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TaskTimedOutEventDetails
/** 
 * Contains details about a resource timeout that occurred during an execution.
**/
export class TaskTimedOutEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: string;
}
