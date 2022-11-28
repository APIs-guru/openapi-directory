import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
import { PullRequestMinimal } from "./pullrequestminimal";



export class WorkflowRunSimpleCommitAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class WorkflowRunSimpleCommitCommitter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class WorkflowRunSimpleCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author: WorkflowRunSimpleCommitAuthor;

  @SpeakeasyMetadata({ data: "json, name=committer" })
  committer: WorkflowRunSimpleCommitCommitter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=tree_id" })
  treeId: string;
}


// WorkflowRun
/** 
 * An invocation of a workflow
**/
export class WorkflowRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifacts_url" })
  artifactsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=cancel_url" })
  cancelUrl: string;

  @SpeakeasyMetadata({ data: "json, name=check_suite_id" })
  checkSuiteId?: number;

  @SpeakeasyMetadata({ data: "json, name=check_suite_node_id" })
  checkSuiteNodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=check_suite_url" })
  checkSuiteUrl: string;

  @SpeakeasyMetadata({ data: "json, name=conclusion" })
  conclusion: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event: string;

  @SpeakeasyMetadata({ data: "json, name=head_branch" })
  headBranch: string;

  @SpeakeasyMetadata({ data: "json, name=head_commit" })
  headCommit: WorkflowRunSimpleCommit;

  @SpeakeasyMetadata({ data: "json, name=head_repository" })
  headRepository: MinimalRepository;

  @SpeakeasyMetadata({ data: "json, name=head_repository_id" })
  headRepositoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=head_sha" })
  headSha: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=jobs_url" })
  jobsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=logs_url" })
  logsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=pull_requests", elemType: PullRequestMinimal })
  pullRequests: PullRequestMinimal[];

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository: MinimalRepository;

  @SpeakeasyMetadata({ data: "json, name=rerun_url" })
  rerunUrl: string;

  @SpeakeasyMetadata({ data: "json, name=run_number" })
  runNumber: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=workflow_id" })
  workflowId: number;

  @SpeakeasyMetadata({ data: "json, name=workflow_url" })
  workflowUrl: string;
}
