import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleCommit } from "./simplecommit";
import { PullRequestMinimal } from "./pullrequestminimal";
import { MinimalRepository } from "./minimalrepository";


export enum CheckSuiteConclusionEnum {
    Success = "success",
    Failure = "failure",
    Neutral = "neutral",
    Cancelled = "cancelled",
    Skipped = "skipped",
    TimedOut = "timed_out",
    ActionRequired = "action_required"
}

export enum CheckSuiteStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}


// CheckSuite
/** 
 * A suite of checks performed on the code of a given code change
**/
export class CheckSuite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=after" })
  after: string;

  @SpeakeasyMetadata({ data: "json, name=app" })
  app: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=before" })
  before: string;

  @SpeakeasyMetadata({ data: "json, name=check_runs_url" })
  checkRunsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=conclusion" })
  conclusion: CheckSuiteConclusionEnum;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=head_branch" })
  headBranch: string;

  @SpeakeasyMetadata({ data: "json, name=head_commit" })
  headCommit: SimpleCommit;

  @SpeakeasyMetadata({ data: "json, name=head_sha" })
  headSha: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=latest_check_runs_count" })
  latestCheckRunsCount: number;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=pull_requests", elemType: PullRequestMinimal })
  pullRequests: PullRequestMinimal[];

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository: MinimalRepository;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CheckSuiteStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
