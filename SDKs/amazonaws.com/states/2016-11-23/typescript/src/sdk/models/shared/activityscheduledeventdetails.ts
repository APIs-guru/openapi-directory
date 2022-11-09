import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";


// ActivityScheduledEventDetails
/** 
 * Contains details about an activity scheduled during an execution.
**/
export class ActivityScheduledEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=heartbeatInSeconds" })
  heartbeatInSeconds?: number;

  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=inputDetails" })
  inputDetails?: HistoryEventExecutionDataDetails;

  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;
}
