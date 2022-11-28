import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
export declare class PullRequestReviewLinksHtml extends SpeakeasyBase {
    href: string;
}
export declare class PullRequestReviewLinksPullRequest extends SpeakeasyBase {
    href: string;
}
export declare class PullRequestReviewLinks extends SpeakeasyBase {
    html: PullRequestReviewLinksHtml;
    pullRequest: PullRequestReviewLinksPullRequest;
}
export declare class PullRequestReviewSimpleUser extends SpeakeasyBase {
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
 * Pull Request Reviews are reviews on pull requests.
**/
export declare class PullRequestReview extends SpeakeasyBase {
    links: PullRequestReviewLinks;
    authorAssociation: AuthorAssociationEnum;
    body: string;
    bodyHtml?: string;
    bodyText?: string;
    commitId: string;
    htmlUrl: string;
    id: number;
    nodeId: string;
    pullRequestUrl: string;
    state: string;
    submittedAt?: Date;
    user: PullRequestReviewSimpleUser;
}
