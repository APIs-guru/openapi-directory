import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstallationGhes2Permissions extends SpeakeasyBase {
    checks?: string;
    contents?: string;
    deployments?: string;
    issues?: string;
    metadata?: string;
    organizationAdministration?: string;
    pullRequests?: string;
    statuses?: string;
}
export declare enum InstallationGhes2RepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}
export declare class InstallationGhes2SimpleUser extends SpeakeasyBase {
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
/**
 * Installation
**/
export declare class InstallationGhes2 extends SpeakeasyBase {
    accessTokensUrl: string;
    account: any;
    appId: number;
    appSlug: string;
    contactEmail?: string;
    createdAt: Date;
    events: string[];
    htmlUrl: string;
    id: number;
    permissions: InstallationGhes2Permissions;
    repositoriesUrl: string;
    repositorySelection: InstallationGhes2RepositorySelectionEnum;
    singleFileName: string;
    suspendedAt?: Date;
    suspendedBy?: InstallationGhes2SimpleUser;
    targetId: number;
    targetType: string;
    updatedAt: Date;
}
