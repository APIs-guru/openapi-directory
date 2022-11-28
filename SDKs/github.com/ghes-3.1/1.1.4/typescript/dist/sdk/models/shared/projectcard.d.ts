import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProjectCardSimpleUser extends SpeakeasyBase {
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
 * Project cards represent a scope of work.
**/
export declare class ProjectCard extends SpeakeasyBase {
    archived?: boolean;
    columnUrl: string;
    contentUrl?: string;
    createdAt: Date;
    creator: ProjectCardSimpleUser;
    id: number;
    nodeId: string;
    note: string;
    projectUrl: string;
    updatedAt: Date;
    url: string;
}
