import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum JobStatusEnum {
    Queued = "queued"
,    InProgress = "in_progress"
,    Completed = "completed"
}

export enum JobStepsStatusEnum {
    Queued = "queued"
,    InProgress = "in_progress"
,    Completed = "completed"
}


export class JobSteps extends SpeakeasyBase {
  @Metadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @Metadata({ data: "json, name=conclusion" })
  conclusion: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status: JobStepsStatusEnum;
}


// Job
/** 
 * Information of a job execution in a workflow run
**/
export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=check_run_url" })
  checkRunUrl: string;

  @Metadata({ data: "json, name=completed_at" })
  completedAt: Date;

  @Metadata({ data: "json, name=conclusion" })
  conclusion: string;

  @Metadata({ data: "json, name=head_sha" })
  headSha: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=run_id" })
  runId: number;

  @Metadata({ data: "json, name=run_url" })
  runUrl: string;

  @Metadata({ data: "json, name=started_at" })
  startedAt: Date;

  @Metadata({ data: "json, name=status" })
  status: JobStatusEnum;

  @Metadata({ data: "json, name=steps", elemType: shared.JobSteps })
  steps?: JobSteps[];

  @Metadata({ data: "json, name=url" })
  url: string;
}
