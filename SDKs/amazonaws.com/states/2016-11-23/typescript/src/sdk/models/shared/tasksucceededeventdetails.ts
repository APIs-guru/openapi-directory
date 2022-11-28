import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";



// TaskSucceededEventDetails
/** 
 * Contains details about the successful completion of a task state.
**/
export class TaskSucceededEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: string;

  @SpeakeasyMetadata({ data: "json, name=outputDetails" })
  outputDetails?: HistoryEventExecutionDataDetails;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: string;
}
