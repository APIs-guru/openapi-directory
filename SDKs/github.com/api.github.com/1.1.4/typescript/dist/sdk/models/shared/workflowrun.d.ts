import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleCommit } from "./simplecommit";
import { MinimalRepository } from "./minimalrepository";
import { PullRequestMinimal } from "./pullrequestminimal";
/**
 * An invocation of a workflow
**/
export declare class WorkflowRun extends SpeakeasyBase {
    artifactsUrl: string;
    cancelUrl: string;
    checkSuiteUrl: string;
    conclusion: string;
    createdAt: Date;
    event: string;
    headBranch: string;
    headCommit: SimpleCommit;
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
