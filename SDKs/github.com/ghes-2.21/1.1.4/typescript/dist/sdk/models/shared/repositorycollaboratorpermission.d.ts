import { SpeakeasyBase } from "../../../internal/utils";
export declare class RepositoryCollaboratorPermissionSimpleUser extends SpeakeasyBase {
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
 * Repository Collaborator Permission
**/
export declare class RepositoryCollaboratorPermission extends SpeakeasyBase {
    permission: string;
    user: RepositoryCollaboratorPermissionSimpleUser;
}
