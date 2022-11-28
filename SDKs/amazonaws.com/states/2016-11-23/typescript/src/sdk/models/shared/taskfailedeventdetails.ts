import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TaskFailedEventDetails
/** 
 * Contains details about a task failure event.
**/
export class TaskFailedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: string;
}
