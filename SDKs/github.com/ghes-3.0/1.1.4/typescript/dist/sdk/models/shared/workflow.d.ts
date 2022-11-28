import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WorkflowStateEnum {
    Active = "active",
    Deleted = "deleted",
    DisabledFork = "disabled_fork",
    DisabledInactivity = "disabled_inactivity",
    DisabledManually = "disabled_manually"
}
/**
 * A GitHub Actions workflow
**/
export declare class Workflow extends SpeakeasyBase {
    badgeUrl: string;
    createdAt: Date;
    deletedAt?: Date;
    htmlUrl: string;
    id: number;
    name: string;
    nodeId: string;
    path: string;
    state: WorkflowStateEnum;
    updatedAt: Date;
    url: string;
}
