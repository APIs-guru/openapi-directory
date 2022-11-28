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
export declare enum PullRequestReviewCommentSideEnum {
    Left = "LEFT",
    Right = "RIGHT"
}
export declare enum PullRequestReviewCommentStartSideEnum {
    Left = "LEFT",
    Right = "RIGHT"
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
    reactions?: ReactionRollup;
    side?: PullRequestReviewCommentSideEnum;
    startLine?: number;
    startSide?: PullRequestReviewCommentStartSideEnum;
    updatedAt: Date;
    url: string;
    user: SimpleUser;
}
