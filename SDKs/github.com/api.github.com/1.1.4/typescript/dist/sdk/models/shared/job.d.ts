import { SpeakeasyBase } from "../../../internal/utils";
export declare enum JobStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}
export declare enum JobStepsStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}
export declare class JobSteps extends SpeakeasyBase {
    completedAt?: Date;
    conclusion: string;
    name: string;
    number: number;
    startedAt?: Date;
    status: JobStepsStatusEnum;
}
/**
 * Information of a job execution in a workflow run
**/
export declare class Job extends SpeakeasyBase {
    checkRunUrl: string;
    completedAt: Date;
    conclusion: string;
    headSha: string;
    htmlUrl: string;
    id: number;
    name: string;
    nodeId: string;
    runId: number;
    runUrl: string;
    startedAt: Date;
    status: JobStatusEnum;
    steps?: JobSteps[];
    url: string;
}
