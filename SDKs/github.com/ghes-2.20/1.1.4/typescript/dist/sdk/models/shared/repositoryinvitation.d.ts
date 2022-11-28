import { SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
export declare class RepositoryInvitationSimpleUser extends SpeakeasyBase {
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
export declare enum RepositoryInvitationPermissionsEnum {
    Read = "read",
    Write = "write",
    Admin = "admin",
    Triage = "triage",
    Maintain = "maintain"
}
/**
 * Repository invitations let you manage who you collaborate with.
**/
export declare class RepositoryInvitation extends SpeakeasyBase {
    createdAt: Date;
    expired?: boolean;
    htmlUrl: string;
    id: number;
    invitee: RepositoryInvitationSimpleUser;
    inviter: RepositoryInvitationSimpleUser;
    nodeId: string;
    permissions: RepositoryInvitationPermissionsEnum;
    repository: MinimalRepository;
    url: string;
}
