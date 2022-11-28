import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEvent } from "./historyevent";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";
/**
 * A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.
**/
export declare class DecisionTask extends SpeakeasyBase {
    events: HistoryEvent[];
    nextPageToken?: string;
    previousStartedEventId?: number;
    startedEventId: number;
    taskToken: string;
    workflowExecution: WorkflowExecution;
    workflowType: WorkflowType;
}
