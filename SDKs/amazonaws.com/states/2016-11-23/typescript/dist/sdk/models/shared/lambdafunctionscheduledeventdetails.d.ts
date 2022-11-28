import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";
/**
 * Contains details about a lambda function scheduled during an execution.
**/
export declare class LambdaFunctionScheduledEventDetails extends SpeakeasyBase {
    input?: string;
    inputDetails?: HistoryEventExecutionDataDetails;
    resource: string;
    timeoutInSeconds?: number;
}
