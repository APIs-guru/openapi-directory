import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";



// LambdaFunctionSucceededEventDetails
/** 
 * Contains details about a lambda function that successfully terminated during an execution.
**/
export class LambdaFunctionSucceededEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: string;

  @SpeakeasyMetadata({ data: "json, name=outputDetails" })
  outputDetails?: HistoryEventExecutionDataDetails;
}
