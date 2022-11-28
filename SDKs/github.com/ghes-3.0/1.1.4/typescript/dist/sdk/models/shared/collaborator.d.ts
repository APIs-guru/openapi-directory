import { SpeakeasyBase } from "../../../internal/utils";
export declare class CollaboratorPermissions extends SpeakeasyBase {
    admin: boolean;
    pull: boolean;
    push: boolean;
}
/**
 * Collaborator
**/
export declare class Collaborator extends SpeakeasyBase {
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
    permissions?: CollaboratorPermissions;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
