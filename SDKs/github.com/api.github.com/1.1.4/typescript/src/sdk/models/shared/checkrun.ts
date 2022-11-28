import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentSimple } from "./deploymentsimple";



export class CheckRunCheckSuite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum CheckRunConclusionEnum {
    Success = "success",
    Failure = "failure",
    Neutral = "neutral",
    Cancelled = "cancelled",
    Skipped = "skipped",
    TimedOut = "timed_out",
    ActionRequired = "action_required"
}


export class CheckRunOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations_count" })
  annotationsCount: number;

  @SpeakeasyMetadata({ data: "json, name=annotations_url" })
  annotationsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}

export enum CheckRunStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}


// CheckRun
/** 
 * A check performed on the code of a given code change
**/
export class CheckRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app" })
  app: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=check_suite" })
  checkSuite: CheckRunCheckSuite;

  @SpeakeasyMetadata({ data: "json, name=completed_at" })
  completedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=conclusion" })
  conclusion: CheckRunConclusionEnum;

  @SpeakeasyMetadata({ data: "json, name=deployment" })
  deployment?: DeploymentSimple;

  @SpeakeasyMetadata({ data: "json, name=details_url" })
  detailsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=external_id" })
  externalId: string;

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

  @SpeakeasyMetadata({ data: "json, name=output" })
  output: CheckRunOutput;

  @SpeakeasyMetadata({ data: "json, name=pull_requests" })
  pullRequests: any;

  @SpeakeasyMetadata({ data: "json, name=started_at" })
  startedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CheckRunStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
