import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";


// LambdaFunctionSucceededEventDetails
/** 
 * Contains details about a lambda function that successfully terminated during an execution.
**/
export class LambdaFunctionSucceededEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=output" })
  output?: string;

  @Metadata({ data: "json, name=outputDetails" })
  outputDetails?: HistoryEventExecutionDataDetails;
}
