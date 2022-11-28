import { SpeakeasyBase } from "../../../internal/utils";
export declare class LegacyReviewCommentLinksHtml extends SpeakeasyBase {
    href?: string;
}
export declare class LegacyReviewCommentLinksPullRequest extends SpeakeasyBase {
    href?: string;
}
export declare class LegacyReviewCommentLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class LegacyReviewCommentLinks extends SpeakeasyBase {
    html?: LegacyReviewCommentLinksHtml;
    pullRequest?: LegacyReviewCommentLinksPullRequest;
    self?: LegacyReviewCommentLinksSelf;
}
export declare class LegacyReviewCommentUser extends SpeakeasyBase {
    avatarUrl?: string;
    eventsUrl?: string;
    followersUrl?: string;
    followingUrl?: string;
    gistsUrl?: string;
    gravatarId?: string;
    htmlUrl?: string;
    id?: number;
    login?: string;
    nodeId?: string;
    organizationsUrl?: string;
    receivedEventsUrl?: string;
    reposUrl?: string;
    siteAdmin?: boolean;
    starredUrl?: string;
    subscriptionsUrl?: string;
    type?: string;
    url?: string;
}
export declare class LegacyReviewComment extends SpeakeasyBase {
    links?: LegacyReviewCommentLinks;
    authorAssociation?: string;
    body?: string;
    commitId?: string;
    createdAt?: string;
    diffHunk?: string;
    htmlUrl?: string;
    id?: number;
    inReplyToId?: number;
    nodeId?: string;
    originalCommitId?: string;
    originalPosition?: number;
    path?: string;
    position?: number;
    pullRequestReviewId?: number;
    pullRequestUrl?: string;
    updatedAt?: string;
    url?: string;
    user?: LegacyReviewCommentUser;
}
