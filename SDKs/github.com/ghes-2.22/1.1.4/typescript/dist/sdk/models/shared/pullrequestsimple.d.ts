import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { SimpleUser } from "./simpleuser";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { Repository } from "./repository";
import { TeamSimple } from "./teamsimple";
export declare class PullRequestSimpleLinks extends SpeakeasyBase {
    comments: Link;
    commits: Link;
    html: Link;
    issue: Link;
    reviewComment: Link;
    reviewComments: Link;
    self: Link;
    statuses: Link;
}
export declare class PullRequestSimpleSimpleUser extends SpeakeasyBase {
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
export declare class PullRequestSimpleBaseSimpleUser extends SpeakeasyBase {
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
export declare class PullRequestSimpleBase extends SpeakeasyBase {
    label: string;
    ref: string;
    repo: Repository;
    sha: string;
    user: PullRequestSimpleBaseSimpleUser;
}
export declare class PullRequestSimpleHeadSimpleUser extends SpeakeasyBase {
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
export declare class PullRequestSimpleHead extends SpeakeasyBase {
    label: string;
    ref: string;
    repo: Repository;
    sha: string;
    user: PullRequestSimpleHeadSimpleUser;
}
export declare class PullRequestSimpleLabels extends SpeakeasyBase {
    color?: string;
    default?: boolean;
    description?: string;
    id?: number;
    name?: string;
    nodeId?: string;
    url?: string;
}
export declare class PullRequestSimpleMilestoneSimpleUser extends SpeakeasyBase {
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
export declare enum PullRequestSimpleMilestoneStateEnum {
    Open = "open",
    Closed = "closed"
}
export declare class PullRequestSimpleMilestone extends SpeakeasyBase {
    closedAt: Date;
    closedIssues: number;
    createdAt: Date;
    creator: PullRequestSimpleMilestoneSimpleUser;
    description: string;
    dueOn: Date;
    htmlUrl: string;
    id: number;
    labelsUrl: string;
    nodeId: string;
    number: number;
    openIssues: number;
    state: PullRequestSimpleMilestoneStateEnum;
    title: string;
    updatedAt: Date;
    url: string;
}
/**
 * Pull Request Simple
**/
export declare class PullRequestSimple extends SpeakeasyBase {
    links: PullRequestSimpleLinks;
    activeLockReason?: string;
    assignee: PullRequestSimpleSimpleUser;
    assignees?: SimpleUser[];
    authorAssociation: AuthorAssociationEnum;
    base: PullRequestSimpleBase;
    body: string;
    closedAt: Date;
    commentsUrl: string;
    commitsUrl: string;
    createdAt: Date;
    diffUrl: string;
    draft?: boolean;
    head: PullRequestSimpleHead;
    htmlUrl: string;
    id: number;
    issueUrl: string;
    labels: PullRequestSimpleLabels[];
    locked: boolean;
    mergeCommitSha: string;
    mergedAt: Date;
    milestone: PullRequestSimpleMilestone;
    nodeId: string;
    number: number;
    patchUrl: string;
    requestedReviewers?: SimpleUser[];
    requestedTeams?: TeamSimple[];
    reviewCommentUrl: string;
    reviewCommentsUrl: string;
    state: string;
    statusesUrl: string;
    title: string;
    updatedAt: Date;
    url: string;
    user: PullRequestSimpleSimpleUser;
}
