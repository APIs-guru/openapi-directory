import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TaskCountResponse
/** 
 * A response object returned from the task count endpoint.
**/
export class TaskCountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=num_completed_milestones" })
  numCompletedMilestones?: number;

  @Metadata({ data: "json, name=num_completed_tasks" })
  numCompletedTasks?: number;

  @Metadata({ data: "json, name=num_incomplete_milestones" })
  numIncompleteMilestones?: number;

  @Metadata({ data: "json, name=num_incomplete_tasks" })
  numIncompleteTasks?: number;

  @Metadata({ data: "json, name=num_milestones" })
  numMilestones?: number;

  @Metadata({ data: "json, name=num_tasks" })
  numTasks?: number;
}
