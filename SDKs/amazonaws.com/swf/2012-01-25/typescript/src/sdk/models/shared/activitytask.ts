import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivityType } from "./activitytype";
import { WorkflowExecution } from "./workflowexecution";


// ActivityTask
/** 
 * Unit of work sent to an activity worker.
**/
export class ActivityTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityId" })
  activityId: string;

  @Metadata({ data: "json, name=activityType" })
  activityType: ActivityType;

  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @Metadata({ data: "json, name=taskToken" })
  taskToken: string;

  @Metadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;
}
