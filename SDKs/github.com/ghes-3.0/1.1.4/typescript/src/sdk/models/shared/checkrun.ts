import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentSimple } from "./deploymentsimple";


export class CheckRunCheckSuite extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum CheckRunConclusionEnum {
    Success = "success"
,    Failure = "failure"
,    Neutral = "neutral"
,    Cancelled = "cancelled"
,    Skipped = "skipped"
,    TimedOut = "timed_out"
,    ActionRequired = "action_required"
}


export class CheckRunOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations_count" })
  annotationsCount: number;

  @Metadata({ data: "json, name=annotations_url" })
  annotationsUrl: string;

  @Metadata({ data: "json, name=summary" })
  summary: string;

  @Metadata({ data: "json, name=text" })
  text: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}

export enum CheckRunStatusEnum {
    Queued = "queued"
,    InProgress = "in_progress"
,    Completed = "completed"
}


// CheckRun
/** 
 * A check performed on the code of a given code change
**/
export class CheckRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=app" })
  app: Map<string, any>;

  @Metadata({ data: "json, name=check_suite" })
  checkSuite: CheckRunCheckSuite;

  @Metadata({ data: "json, name=completed_at" })
  completedAt: Date;

  @Metadata({ data: "json, name=conclusion" })
  conclusion: CheckRunConclusionEnum;

  @Metadata({ data: "json, name=deployment" })
  deployment?: DeploymentSimple;

  @Metadata({ data: "json, name=details_url" })
  detailsUrl: string;

  @Metadata({ data: "json, name=external_id" })
  externalId: string;

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

  @Metadata({ data: "json, name=output" })
  output: CheckRunOutput;

  @Metadata({ data: "json, name=pull_requests" })
  pullRequests: any;

  @Metadata({ data: "json, name=started_at" })
  startedAt: Date;

  @Metadata({ data: "json, name=status" })
  status: CheckRunStatusEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}
