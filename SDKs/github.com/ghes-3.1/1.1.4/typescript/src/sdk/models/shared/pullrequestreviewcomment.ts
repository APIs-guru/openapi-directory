import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { ReactionRollup } from "./reactionrollup";
import { SimpleUser } from "./simpleuser";


export class PullRequestReviewCommentLinksHtml extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;
}


export class PullRequestReviewCommentLinksPullRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;
}


export class PullRequestReviewCommentLinksSelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;
}


export class PullRequestReviewCommentLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=html" })
  html: PullRequestReviewCommentLinksHtml;

  @Metadata({ data: "json, name=pull_request" })
  pullRequest: PullRequestReviewCommentLinksPullRequest;

  @Metadata({ data: "json, name=self" })
  self: PullRequestReviewCommentLinksSelf;
}

export enum PullRequestReviewCommentSideEnum {
    Left = "LEFT"
,    Right = "RIGHT"
}

export enum PullRequestReviewCommentStartSideEnum {
    Left = "LEFT"
,    Right = "RIGHT"
}


// PullRequestReviewComment
/** 
 * Pull Request Review Comments are comments on a portion of the Pull Request's diff.
**/
export class PullRequestReviewComment extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links: PullRequestReviewCommentLinks;

  @Metadata({ data: "json, name=author_association" })
  authorAssociation: AuthorAssociationEnum;

  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=body_html" })
  bodyHtml?: string;

  @Metadata({ data: "json, name=body_text" })
  bodyText?: string;

  @Metadata({ data: "json, name=commit_id" })
  commitId: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=diff_hunk" })
  diffHunk: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=in_reply_to_id" })
  inReplyToId?: number;

  @Metadata({ data: "json, name=line" })
  line?: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=original_commit_id" })
  originalCommitId: string;

  @Metadata({ data: "json, name=original_line" })
  originalLine?: number;

  @Metadata({ data: "json, name=original_position" })
  originalPosition: number;

  @Metadata({ data: "json, name=original_start_line" })
  originalStartLine?: number;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=position" })
  position: number;

  @Metadata({ data: "json, name=pull_request_review_id" })
  pullRequestReviewId: number;

  @Metadata({ data: "json, name=pull_request_url" })
  pullRequestUrl: string;

  @Metadata({ data: "json, name=reactions" })
  reactions?: ReactionRollup;

  @Metadata({ data: "json, name=side" })
  side?: PullRequestReviewCommentSideEnum;

  @Metadata({ data: "json, name=start_line" })
  startLine?: number;

  @Metadata({ data: "json, name=start_side" })
  startSide?: PullRequestReviewCommentStartSideEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=user" })
  user: SimpleUser;
}
