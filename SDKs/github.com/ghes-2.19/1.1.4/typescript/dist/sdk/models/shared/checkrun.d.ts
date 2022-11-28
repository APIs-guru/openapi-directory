import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentSimple } from "./deploymentsimple";
export declare class CheckRunCheckSuite extends SpeakeasyBase {
    id: number;
}
export declare enum CheckRunConclusionEnum {
    Success = "success",
    Failure = "failure",
    Neutral = "neutral",
    Cancelled = "cancelled",
    Skipped = "skipped",
    TimedOut = "timed_out",
    ActionRequired = "action_required"
}
export declare class CheckRunOutput extends SpeakeasyBase {
    annotationsCount: number;
    annotationsUrl: string;
    summary: string;
    text: string;
    title: string;
}
export declare enum CheckRunStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}
/**
 * A check performed on the code of a given code change
**/
export declare class CheckRun extends SpeakeasyBase {
    app: Map<string, any>;
    checkSuite: CheckRunCheckSuite;
    completedAt: Date;
    conclusion: CheckRunConclusionEnum;
    deployment?: DeploymentSimple;
    detailsUrl: string;
    externalId: string;
    headSha: string;
    htmlUrl: string;
    id: number;
    name: string;
    nodeId: string;
    output: CheckRunOutput;
    pullRequests: any;
    startedAt: Date;
    status: CheckRunStatusEnum;
    url: string;
}
