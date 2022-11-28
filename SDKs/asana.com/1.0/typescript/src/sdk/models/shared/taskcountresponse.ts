import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TaskCountResponse
/** 
 * A response object returned from the task count endpoint.
**/
export class TaskCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=num_completed_milestones" })
  numCompletedMilestones?: number;

  @SpeakeasyMetadata({ data: "json, name=num_completed_tasks" })
  numCompletedTasks?: number;

  @SpeakeasyMetadata({ data: "json, name=num_incomplete_milestones" })
  numIncompleteMilestones?: number;

  @SpeakeasyMetadata({ data: "json, name=num_incomplete_tasks" })
  numIncompleteTasks?: number;

  @SpeakeasyMetadata({ data: "json, name=num_milestones" })
  numMilestones?: number;

  @SpeakeasyMetadata({ data: "json, name=num_tasks" })
  numTasks?: number;
}
