import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";



// StateEnteredEventDetails
/** 
 * Contains details about a state entered during an execution.
**/
export class StateEnteredEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=inputDetails" })
  inputDetails?: HistoryEventExecutionDataDetails;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
