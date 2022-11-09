import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";


// StateExitedEventDetails
/** 
 * Contains details about an exit from a state during an execution.
**/
export class StateExitedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=output" })
  output?: string;

  @Metadata({ data: "json, name=outputDetails" })
  outputDetails?: HistoryEventExecutionDataDetails;
}
