import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityType } from "./activitytype";
import { WorkflowExecution } from "./workflowexecution";



// ActivityTask
/** 
 * Unit of work sent to an activity worker.
**/
export class ActivityTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityId" })
  activityId: string;

  @SpeakeasyMetadata({ data: "json, name=activityType" })
  activityType: ActivityType;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=taskToken" })
  taskToken: string;

  @SpeakeasyMetadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;
}
