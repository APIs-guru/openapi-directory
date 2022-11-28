import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";



// StateExitedEventDetails
/** 
 * Contains details about an exit from a state during an execution.
**/
export class StateExitedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: string;

  @SpeakeasyMetadata({ data: "json, name=outputDetails" })
  outputDetails?: HistoryEventExecutionDataDetails;
}
