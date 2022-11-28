import { SpeakeasyBase } from "../../../internal/utils";
export declare class BranchRestrictionPolicyAppsOwner extends SpeakeasyBase {
    avatarUrl?: string;
    description?: string;
    eventsUrl?: string;
    followersUrl?: string;
    followingUrl?: string;
    gistsUrl?: string;
    gravatarId?: string;
    hooksUrl?: string;
    htmlUrl?: string;
    id?: number;
    issuesUrl?: string;
    login?: string;
    membersUrl?: string;
    nodeId?: string;
    organizationsUrl?: string;
    publicMembersUrl?: string;
    receivedEventsUrl?: string;
    reposUrl?: string;
    starredUrl?: string;
    subscriptionsUrl?: string;
    type?: string;
    url?: string;
}
export declare class BranchRestrictionPolicyAppsPermissions extends SpeakeasyBase {
    contents?: string;
    issues?: string;
    metadata?: string;
    singleFile?: string;
}
export declare class BranchRestrictionPolicyApps extends SpeakeasyBase {
    createdAt?: string;
    description?: string;
    events?: string[];
    externalUrl?: string;
    htmlUrl?: string;
    id?: number;
    name?: string;
    nodeId?: string;
    owner?: BranchRestrictionPolicyAppsOwner;
    permissions?: BranchRestrictionPolicyAppsPermissions;
    slug?: string;
    updatedAt?: string;
}
export declare class BranchRestrictionPolicyRestrictionsTeams extends SpeakeasyBase {
    description?: string;
    htmlUrl?: string;
    id?: number;
    membersUrl?: string;
    name?: string;
    nodeId?: string;
    parent?: any;
    permission?: string;
    privacy?: string;
    repositoriesUrl?: string;
    slug?: string;
    url?: string;
}
export declare class BranchRestrictionPolicyRestrictionsUsers extends SpeakeasyBase {
    avatarUrl?: string;
    eventsUrl?: string;
    followersUrl?: string;
    followingUrl?: string;
    gistsUrl?: string;
    gravatarId?: string;
    htmlUrl?: string;
    id?: number;
    login?: string;
    nodeId?: string;
    organizationsUrl?: string;
    receivedEventsUrl?: string;
    reposUrl?: string;
    siteAdmin?: boolean;
    starredUrl?: string;
    subscriptionsUrl?: string;
    type?: string;
    url?: string;
}
export declare class BranchRestrictionPolicyRestrictions extends SpeakeasyBase {
    teams?: BranchRestrictionPolicyRestrictionsTeams[];
    teamsUrl?: string;
    url?: string;
    users?: BranchRestrictionPolicyRestrictionsUsers[];
    usersUrl?: string;
}
export declare class BranchRestrictionPolicyTeams extends SpeakeasyBase {
    description?: string;
    htmlUrl?: string;
    id?: number;
    membersUrl?: string;
    name?: string;
    nodeId?: string;
    parent?: string;
    permission?: string;
    privacy?: string;
    repositoriesUrl?: string;
    slug?: string;
    url?: string;
}
export declare class BranchRestrictionPolicyUsers extends SpeakeasyBase {
    avatarUrl?: string;
    eventsUrl?: string;
    followersUrl?: string;
    followingUrl?: string;
    gistsUrl?: string;
    gravatarId?: string;
    htmlUrl?: string;
    id?: number;
    login?: string;
    nodeId?: string;
    organizationsUrl?: string;
    receivedEventsUrl?: string;
    reposUrl?: string;
    siteAdmin?: boolean;
    starredUrl?: string;
    subscriptionsUrl?: string;
    type?: string;
    url?: string;
}
/**
 * Branch Restriction Policy
**/
export declare class BranchRestrictionPolicy extends SpeakeasyBase {
    apps: BranchRestrictionPolicyApps[];
    appsUrl: string;
    restrictions?: BranchRestrictionPolicyRestrictions[];
    teams: BranchRestrictionPolicyTeams[];
    teamsUrl: string;
    url: string;
    users: BranchRestrictionPolicyUsers[];
    usersUrl: string;
}
