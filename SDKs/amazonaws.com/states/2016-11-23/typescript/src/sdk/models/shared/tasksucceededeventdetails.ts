import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";


// TaskSucceededEventDetails
/** 
 * Contains details about the successful completion of a task state.
**/
export class TaskSucceededEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=output" })
  output?: string;

  @Metadata({ data: "json, name=outputDetails" })
  outputDetails?: HistoryEventExecutionDataDetails;

  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: string;
}
