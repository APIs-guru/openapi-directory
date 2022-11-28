import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { Label } from "./label";
import { Repository } from "./repository";
export declare class IssueSimpleSimpleUser extends SpeakeasyBase {
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
export declare class IssueSimpleMilestoneSimpleUser extends SpeakeasyBase {
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
export declare enum IssueSimpleMilestoneStateEnum {
    Open = "open",
    Closed = "closed"
}
export declare class IssueSimpleMilestone extends SpeakeasyBase {
    closedAt: Date;
    closedIssues: number;
    createdAt: Date;
    creator: IssueSimpleMilestoneSimpleUser;
    description: string;
    dueOn: Date;
    htmlUrl: string;
    id: number;
    labelsUrl: string;
    nodeId: string;
    number: number;
    openIssues: number;
    state: IssueSimpleMilestoneStateEnum;
    title: string;
    updatedAt: Date;
    url: string;
}
export declare class IssueSimplePullRequest extends SpeakeasyBase {
    diffUrl: string;
    htmlUrl: string;
    mergedAt?: Date;
    patchUrl: string;
    url: string;
}
/**
 * Issue Simple
**/
export declare class IssueSimple extends SpeakeasyBase {
    activeLockReason?: string;
    assignee: IssueSimpleSimpleUser;
    assignees?: SimpleUser[];
    authorAssociation: AuthorAssociationEnum;
    body?: string;
    bodyHtml?: string;
    bodyText?: string;
    closedAt: Date;
    comments: number;
    commentsUrl: string;
    createdAt: Date;
    eventsUrl: string;
    htmlUrl: string;
    id: number;
    labels: Label[];
    labelsUrl: string;
    locked: boolean;
    milestone: IssueSimpleMilestone;
    nodeId: string;
    number: number;
    performedViaGithubApp?: Map<string, any>;
    pullRequest?: IssueSimplePullRequest;
    repository?: Repository;
    repositoryUrl: string;
    state: string;
    timelineUrl?: string;
    title: string;
    updatedAt: Date;
    url: string;
    user: IssueSimpleSimpleUser;
}
