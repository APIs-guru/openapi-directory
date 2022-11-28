import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstallationPermissions extends SpeakeasyBase {
    checks?: string;
    contents?: string;
    deployments?: string;
    issues?: string;
    metadata?: string;
    organizationAdministration?: string;
    pullRequests?: string;
    statuses?: string;
}
export declare enum InstallationRepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}
export declare class InstallationSimpleUser extends SpeakeasyBase {
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
export declare class Installation extends SpeakeasyBase {
    accessTokensUrl: string;
    account: any;
    appId: number;
    appSlug: string;
    contactEmail?: string;
    createdAt: Date;
    events: string[];
    hasMultipleSingleFiles?: boolean;
    htmlUrl: string;
    id: number;
    permissions: InstallationPermissions;
    repositoriesUrl: string;
    repositorySelection: InstallationRepositorySelectionEnum;
    singleFileName: string;
    singleFilePaths?: string[];
    suspendedAt: Date;
    suspendedBy: InstallationSimpleUser;
    targetId: number;
    targetType: string;
    updatedAt: Date;
}
