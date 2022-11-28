import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryEvent } from "./historyevent";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";



// DecisionTask
/** 
 * A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.
**/
export class DecisionTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: HistoryEvent })
  events: HistoryEvent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=previousStartedEventId" })
  previousStartedEventId?: number;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=taskToken" })
  taskToken: string;

  @SpeakeasyMetadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;

  @SpeakeasyMetadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
