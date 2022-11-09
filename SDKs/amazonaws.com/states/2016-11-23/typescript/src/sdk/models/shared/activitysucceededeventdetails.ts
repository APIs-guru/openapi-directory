import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";


// ActivitySucceededEventDetails
/** 
 * Contains details about an activity that successfully terminated during an execution.
**/
export class ActivitySucceededEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=output" })
  output?: string;

  @Metadata({ data: "json, name=outputDetails" })
  outputDetails?: HistoryEventExecutionDataDetails;
}
