import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { ReactionRollup } from "./reactionrollup";
import { SimpleUser } from "./simpleuser";
export declare class PullRequestReviewCommentLinksHtml extends SpeakeasyBase {
    href: string;
}
export declare class PullRequestReviewCommentLinksPullRequest extends SpeakeasyBase {
    href: string;
}
export declare class PullRequestReviewCommentLinksSelf extends SpeakeasyBase {
    href: string;
}
export declare class PullRequestReviewCommentLinks extends SpeakeasyBase {
    html: PullRequestReviewCommentLinksHtml;
    pullRequest: PullRequestReviewCommentLinksPullRequest;
    self: PullRequestReviewCommentLinksSelf;
}
/**
 * Pull Request Review Comments are comments on a portion of the Pull Request's diff.
**/
export declare class PullRequestReviewComment extends SpeakeasyBase {
    links: PullRequestReviewCommentLinks;
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
    nodeId: string;
    originalCommitId: string;
    originalPosition: number;
    path: string;
    position: number;
    pullRequestReviewId: number;
    pullRequestUrl: string;
    reactions?: ReactionRollup;
    updatedAt: Date;
    url: string;
    user: SimpleUser;
}
