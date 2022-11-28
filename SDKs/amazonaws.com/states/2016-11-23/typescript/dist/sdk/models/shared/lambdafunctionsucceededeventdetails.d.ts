import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";
/**
 * Contains details about a lambda function that successfully terminated during an execution.
**/
export declare class LambdaFunctionSucceededEventDetails extends SpeakeasyBase {
    output?: string;
    outputDetails?: HistoryEventExecutionDataDetails;
}
