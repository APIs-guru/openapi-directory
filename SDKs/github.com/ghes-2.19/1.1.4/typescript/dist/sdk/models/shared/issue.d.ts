import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { ReactionRollup } from "./reactionrollup";
import { Repository } from "./repository";
export declare class IssueSimpleUser extends SpeakeasyBase {
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
export declare class IssueLabels2 extends SpeakeasyBase {
    color?: string;
    default?: boolean;
    description?: string;
    id?: number;
    name?: string;
    nodeId?: string;
    url?: string;
}
export declare class IssueMilestoneSimpleUser extends SpeakeasyBase {
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
export declare enum IssueMilestoneStateEnum {
    Open = "open",
    Closed = "closed"
}
export declare class IssueMilestone extends SpeakeasyBase {
    closedAt: Date;
    closedIssues: number;
    createdAt: Date;
    creator: IssueMilestoneSimpleUser;
    description: string;
    dueOn: Date;
    htmlUrl: string;
    id: number;
    labelsUrl: string;
    nodeId: string;
    number: number;
    openIssues: number;
    state: IssueMilestoneStateEnum;
    title: string;
    updatedAt: Date;
    url: string;
}
export declare class IssuePullRequest extends SpeakeasyBase {
    diffUrl: string;
    htmlUrl: string;
    mergedAt?: Date;
    patchUrl: string;
    url: string;
}
/**
 * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
**/
export declare class Issue extends SpeakeasyBase {
    activeLockReason?: string;
    assignee: IssueSimpleUser;
    assignees?: SimpleUser[];
    authorAssociation: AuthorAssociationEnum;
    body?: string;
    bodyHtml?: string;
    bodyText?: string;
    closedAt: Date;
    closedBy?: IssueSimpleUser;
    comments: number;
    commentsUrl: string;
    createdAt: Date;
    eventsUrl: string;
    htmlUrl: string;
    id: number;
    labels: any[];
    labelsUrl: string;
    locked: boolean;
    milestone: IssueMilestone;
    nodeId: string;
    number: number;
    performedViaGithubApp?: Map<string, any>;
    pullRequest?: IssuePullRequest;
    reactions?: ReactionRollup;
    repository?: Repository;
    repositoryUrl: string;
    state: string;
    timelineUrl?: string;
    title: string;
    updatedAt: Date;
    url: string;
    user: IssueSimpleUser;
}
