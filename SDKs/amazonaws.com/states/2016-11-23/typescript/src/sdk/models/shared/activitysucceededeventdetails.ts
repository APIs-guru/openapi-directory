import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";



// ActivitySucceededEventDetails
/** 
 * Contains details about an activity that successfully terminated during an execution.
**/
export class ActivitySucceededEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: string;

  @SpeakeasyMetadata({ data: "json, name=outputDetails" })
  outputDetails?: HistoryEventExecutionDataDetails;
}
