import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
export declare class EnvironmentApprovalsEnvironments extends SpeakeasyBase {
    createdAt?: Date;
    htmlUrl?: string;
    id?: number;
    name?: string;
    nodeId?: string;
    updatedAt?: Date;
    url?: string;
}
export declare enum EnvironmentApprovalsStateEnum {
    Approved = "approved",
    Rejected = "rejected"
}
/**
 * An entry in the reviews log for environment deployments
**/
export declare class EnvironmentApprovals extends SpeakeasyBase {
    comment: string;
    environments: EnvironmentApprovalsEnvironments[];
    state: EnvironmentApprovalsStateEnum;
    user: SimpleUser;
}
