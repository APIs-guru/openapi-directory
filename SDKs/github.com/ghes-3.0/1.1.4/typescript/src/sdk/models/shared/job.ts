import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum JobStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}

export enum JobStepsStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}


export class JobSteps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=conclusion" })
  conclusion: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: JobStepsStatusEnum;
}


// Job
/** 
 * Information of a job execution in a workflow run
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_run_url" })
  checkRunUrl: string;

  @SpeakeasyMetadata({ data: "json, name=completed_at" })
  completedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=conclusion" })
  conclusion: string;

  @SpeakeasyMetadata({ data: "json, name=head_sha" })
  headSha: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=run_id" })
  runId: number;

  @SpeakeasyMetadata({ data: "json, name=run_url" })
  runUrl: string;

  @SpeakeasyMetadata({ data: "json, name=started_at" })
  startedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: JobSteps })
  steps?: JobSteps[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
