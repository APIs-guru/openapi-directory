import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";
import { TaskCompact } from "./taskcompact";
export declare enum JobResponseStatusEnum {
    NotStarted = "not_started",
    InProgress = "in_progress",
    Completed = "completed",
    Failed = "failed"
}
export declare class JobResponse extends SpeakeasyBase {
    gid?: string;
    newProject?: ProjectCompact;
    newTask?: TaskCompact;
    resourceSubtype?: string;
    resourceType?: string;
    status?: JobResponseStatusEnum;
}
