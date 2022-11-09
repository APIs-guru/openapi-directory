import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimpleCommit } from "./simplecommit";
import { MinimalRepository } from "./minimalrepository";
import { PullRequestMinimal } from "./pullrequestminimal";
import { MinimalRepository } from "./minimalrepository";


// WorkflowRun
/** 
 * An invocation of a workflow
**/
export class WorkflowRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifacts_url" })
  artifactsUrl: string;

  @Metadata({ data: "json, name=cancel_url" })
  cancelUrl: string;

  @Metadata({ data: "json, name=check_suite_url" })
  checkSuiteUrl: string;

  @Metadata({ data: "json, name=conclusion" })
  conclusion: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=event" })
  event: string;

  @Metadata({ data: "json, name=head_branch" })
  headBranch: string;

  @Metadata({ data: "json, name=head_commit" })
  headCommit: SimpleCommit;

  @Metadata({ data: "json, name=head_repository" })
  headRepository: MinimalRepository;

  @Metadata({ data: "json, name=head_repository_id" })
  headRepositoryId?: number;

  @Metadata({ data: "json, name=head_sha" })
  headSha: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=jobs_url" })
  jobsUrl: string;

  @Metadata({ data: "json, name=logs_url" })
  logsUrl: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=pull_requests", elemType: shared.PullRequestMinimal })
  pullRequests: PullRequestMinimal[];

  @Metadata({ data: "json, name=repository" })
  repository: MinimalRepository;

  @Metadata({ data: "json, name=rerun_url" })
  rerunUrl: string;

  @Metadata({ data: "json, name=run_number" })
  runNumber: number;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=workflow_id" })
  workflowId: number;

  @Metadata({ data: "json, name=workflow_url" })
  workflowUrl: string;
}
