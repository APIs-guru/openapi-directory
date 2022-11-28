import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WorkflowStateEnum {
    Active = "active",
    Deleted = "deleted"
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
