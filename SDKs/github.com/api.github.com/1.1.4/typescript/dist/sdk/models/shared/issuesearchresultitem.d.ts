import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { Repository } from "./repository";
import { SearchResultTextMatches } from "./searchresulttextmatches";
export declare class IssueSearchResultItemSimpleUser extends SpeakeasyBase {
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
export declare class IssueSearchResultItemLabels extends SpeakeasyBase {
    color?: string;
    default?: boolean;
    description?: string;
    id?: number;
    name?: string;
    nodeId?: string;
    url?: string;
}
export declare class IssueSearchResultItemMilestoneSimpleUser extends SpeakeasyBase {
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
export declare enum IssueSearchResultItemMilestoneStateEnum {
    Open = "open",
    Closed = "closed"
}
export declare class IssueSearchResultItemMilestone extends SpeakeasyBase {
    closedAt: Date;
    closedIssues: number;
    createdAt: Date;
    creator: IssueSearchResultItemMilestoneSimpleUser;
    description: string;
    dueOn: Date;
    htmlUrl: string;
    id: number;
    labelsUrl: string;
    nodeId: string;
    number: number;
    openIssues: number;
    state: IssueSearchResultItemMilestoneStateEnum;
    title: string;
    updatedAt: Date;
    url: string;
}
export declare class IssueSearchResultItemPullRequest extends SpeakeasyBase {
    diffUrl: string;
    htmlUrl: string;
    mergedAt?: Date;
    patchUrl: string;
    url: string;
}
/**
 * Issue Search Result Item
**/
export declare class IssueSearchResultItem extends SpeakeasyBase {
    activeLockReason?: string;
    assignee: IssueSearchResultItemSimpleUser;
    assignees?: SimpleUser[];
    authorAssociation: AuthorAssociationEnum;
    body?: string;
    bodyHtml?: string;
    bodyText?: string;
    closedAt: Date;
    comments: number;
    commentsUrl: string;
    createdAt: Date;
    draft?: boolean;
    eventsUrl: string;
    htmlUrl: string;
    id: number;
    labels: IssueSearchResultItemLabels[];
    labelsUrl: string;
    locked: boolean;
    milestone: IssueSearchResultItemMilestone;
    nodeId: string;
    number: number;
    performedViaGithubApp?: Map<string, any>;
    pullRequest?: IssueSearchResultItemPullRequest;
    repository?: Repository;
    repositoryUrl: string;
    score: number;
    state: string;
    textMatches?: SearchResultTextMatches[];
    timelineUrl?: string;
    title: string;
    updatedAt: Date;
    url: string;
    user: IssueSearchResultItemSimpleUser;
}
