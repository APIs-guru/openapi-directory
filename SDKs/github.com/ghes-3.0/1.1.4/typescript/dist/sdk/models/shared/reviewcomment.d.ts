import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { AuthorAssociationEnum } from "./authorassociationenum";
export declare class ReviewCommentLinks extends SpeakeasyBase {
    html: Link;
    pullRequest: Link;
    self: Link;
}
export declare enum ReviewCommentSideEnum {
    Left = "LEFT",
    Right = "RIGHT"
}
export declare enum ReviewCommentStartSideEnum {
    Left = "LEFT",
    Right = "RIGHT"
}
export declare class ReviewCommentSimpleUser extends SpeakeasyBase {
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
 * Legacy Review Comment
**/
export declare class ReviewComment extends SpeakeasyBase {
    links: ReviewCommentLinks;
    authorAssociation: AuthorAssociationEnum;
    body: string;
    bodyHtml?: string;
    bodyText?: string;
    commitId: string;
    createdAt: Date;
    diffHunk: string;
    htmlUrl: string;
    id: number;
    inReplyToId?: number;
    line?: number;
    nodeId: string;
    originalCommitId: string;
    originalLine?: number;
    originalPosition: number;
    originalStartLine?: number;
    path: string;
    position: number;
    pullRequestReviewId: number;
    pullRequestUrl: string;
    side?: ReviewCommentSideEnum;
    startLine?: number;
    startSide?: ReviewCommentStartSideEnum;
    updatedAt: Date;
    url: string;
    user: ReviewCommentSimpleUser;
}
