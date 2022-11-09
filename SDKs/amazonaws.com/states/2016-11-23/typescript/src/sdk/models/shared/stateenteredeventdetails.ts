import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";


// StateEnteredEventDetails
/** 
 * Contains details about a state entered during an execution.
**/
export class StateEnteredEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=inputDetails" })
  inputDetails?: HistoryEventExecutionDataDetails;

  @Metadata({ data: "json, name=name" })
  name: string;
}
