import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HistoryEvent } from "./historyevent";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";


// DecisionTask
/** 
 * A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.
**/
export class DecisionTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=events", elemType: shared.HistoryEvent })
  events: HistoryEvent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=previousStartedEventId" })
  previousStartedEventId?: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @Metadata({ data: "json, name=taskToken" })
  taskToken: string;

  @Metadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
