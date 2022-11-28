import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecutionFailedEventDetails
/** 
 * Contains details about an execution failure event.
**/
export class ExecutionFailedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}
