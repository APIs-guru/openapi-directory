import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeploymentStatusSimpleUser extends SpeakeasyBase {
    avatarUrl: string;
    eventsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    htmlUrl: string;
    id: number;
    login: string;
    nodeId: string;
    organizationsUrl: string;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredAt?: string;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
export declare enum DeploymentStatusStateEnum {
    Error = "error",
    Failure = "failure",
    Inactive = "inactive",
    Pending = "pending",
    Success = "success",
    Queued = "queued",
    InProgress = "in_progress"
}
/**
 * The status of a deployment.
**/
export declare class DeploymentStatus extends SpeakeasyBase {
    createdAt: Date;
    creator: DeploymentStatusSimpleUser;
    deploymentUrl: string;
    description: string;
    environment?: string;
    environmentUrl?: string;
    id: number;
    logUrl?: string;
    nodeId: string;
    performedViaGithubApp?: Map<string, any>;
    repositoryUrl: string;
    state: DeploymentStatusStateEnum;
    targetUrl: string;
    updatedAt: Date;
    url: string;
}
