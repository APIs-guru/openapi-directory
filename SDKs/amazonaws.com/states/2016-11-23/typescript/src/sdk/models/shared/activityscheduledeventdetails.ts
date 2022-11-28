import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";



// ActivityScheduledEventDetails
/** 
 * Contains details about an activity scheduled during an execution.
**/
export class ActivityScheduledEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=heartbeatInSeconds" })
  heartbeatInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=inputDetails" })
  inputDetails?: HistoryEventExecutionDataDetails;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;
}
