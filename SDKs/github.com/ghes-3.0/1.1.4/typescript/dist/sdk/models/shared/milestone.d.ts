import { SpeakeasyBase } from "../../../internal/utils";
export declare class MilestoneSimpleUser extends SpeakeasyBase {
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
export declare enum MilestoneStateEnum {
    Open = "open",
    Closed = "closed"
}
/**
 * A collection of related issues and pull requests.
**/
export declare class Milestone extends SpeakeasyBase {
    closedAt: Date;
    closedIssues: number;
    createdAt: Date;
    creator: MilestoneSimpleUser;
    description: string;
    dueOn: Date;
    htmlUrl: string;
    id: number;
    labelsUrl: string;
    nodeId: string;
    number: number;
    openIssues: number;
    state: MilestoneStateEnum;
    title: string;
    updatedAt: Date;
    url: string;
}
