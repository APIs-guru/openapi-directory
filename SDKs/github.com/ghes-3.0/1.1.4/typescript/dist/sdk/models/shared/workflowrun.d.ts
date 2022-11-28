import { SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
import { PullRequestMinimal } from "./pullrequestminimal";
export declare class WorkflowRunSimpleCommitAuthor extends SpeakeasyBase {
    email: string;
    name: string;
}
export declare class WorkflowRunSimpleCommitCommitter extends SpeakeasyBase {
    email: string;
    name: string;
}
export declare class WorkflowRunSimpleCommit extends SpeakeasyBase {
    author: WorkflowRunSimpleCommitAuthor;
    committer: WorkflowRunSimpleCommitCommitter;
    id: string;
    message: string;
    timestamp: Date;
    treeId: string;
}
/**
 * An invocation of a workflow
**/
export declare class WorkflowRun extends SpeakeasyBase {
    artifactsUrl: string;
    cancelUrl: string;
    checkSuiteId?: number;
    checkSuiteNodeId?: string;
    checkSuiteUrl: string;
    conclusion: string;
    createdAt: Date;
    event: string;
    headBranch: string;
    headCommit: WorkflowRunSimpleCommit;
    headRepository: MinimalRepository;
    headRepositoryId?: number;
    headSha: string;
    htmlUrl: string;
    id: number;
    jobsUrl: string;
    logsUrl: string;
    name?: string;
    nodeId: string;
    pullRequests: PullRequestMinimal[];
    repository: MinimalRepository;
    rerunUrl: string;
    runNumber: number;
    status: string;
    updatedAt: Date;
    url: string;
    workflowId: number;
    workflowUrl: string;
}
