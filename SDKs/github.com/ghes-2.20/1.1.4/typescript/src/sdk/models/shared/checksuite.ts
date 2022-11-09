import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimpleCommit } from "./simplecommit";
import { PullRequestMinimal } from "./pullrequestminimal";
import { MinimalRepository } from "./minimalrepository";

export enum CheckSuiteConclusionEnum {
    Success = "success"
,    Failure = "failure"
,    Neutral = "neutral"
,    Cancelled = "cancelled"
,    Skipped = "skipped"
,    TimedOut = "timed_out"
,    ActionRequired = "action_required"
}

export enum CheckSuiteStatusEnum {
    Queued = "queued"
,    InProgress = "in_progress"
,    Completed = "completed"
}


// CheckSuite
/** 
 * A suite of checks performed on the code of a given code change
**/
export class CheckSuite extends SpeakeasyBase {
  @Metadata({ data: "json, name=after" })
  after: string;

  @Metadata({ data: "json, name=app" })
  app: Map<string, any>;

  @Metadata({ data: "json, name=before" })
  before: string;

  @Metadata({ data: "json, name=check_runs_url" })
  checkRunsUrl: string;

  @Metadata({ data: "json, name=conclusion" })
  conclusion: CheckSuiteConclusionEnum;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=head_branch" })
  headBranch: string;

  @Metadata({ data: "json, name=head_commit" })
  headCommit: SimpleCommit;

  @Metadata({ data: "json, name=head_sha" })
  headSha: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=latest_check_runs_count" })
  latestCheckRunsCount: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=pull_requests", elemType: shared.PullRequestMinimal })
  pullRequests: PullRequestMinimal[];

  @Metadata({ data: "json, name=repository" })
  repository: MinimalRepository;

  @Metadata({ data: "json, name=status" })
  status: CheckSuiteStatusEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
