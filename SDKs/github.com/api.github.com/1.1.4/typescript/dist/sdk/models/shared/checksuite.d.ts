import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleCommit } from "./simplecommit";
import { PullRequestMinimal } from "./pullrequestminimal";
import { MinimalRepository } from "./minimalrepository";
export declare enum CheckSuiteConclusionEnum {
    Success = "success",
    Failure = "failure",
    Neutral = "neutral",
    Cancelled = "cancelled",
    Skipped = "skipped",
    TimedOut = "timed_out",
    ActionRequired = "action_required"
}
export declare enum CheckSuiteStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}
/**
 * A suite of checks performed on the code of a given code change
**/
export declare class CheckSuite extends SpeakeasyBase {
    after: string;
    app: Map<string, any>;
    before: string;
    checkRunsUrl: string;
    conclusion: CheckSuiteConclusionEnum;
    createdAt: Date;
    headBranch: string;
    headCommit: SimpleCommit;
    headSha: string;
    id: number;
    latestCheckRunsCount: number;
    nodeId: string;
    pullRequests: PullRequestMinimal[];
    repository: MinimalRepository;
    status: CheckSuiteStatusEnum;
    updatedAt: Date;
    url: string;
}
