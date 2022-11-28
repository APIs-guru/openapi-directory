import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { ReactionRollup } from "./reactionrollup";
import { SimpleUser } from "./simpleuser";



export class PullRequestReviewCommentLinksHtml extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}


export class PullRequestReviewCommentLinksPullRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}


export class PullRequestReviewCommentLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}


export class PullRequestReviewCommentLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html" })
  html: PullRequestReviewCommentLinksHtml;

  @SpeakeasyMetadata({ data: "json, name=pull_request" })
  pullRequest: PullRequestReviewCommentLinksPullRequest;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: PullRequestReviewCommentLinksSelf;
}


// PullRequestReviewComment
/** 
 * Pull Request Review Comments are comments on a portion of the Pull Request's diff.
**/
export class PullRequestReviewComment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: PullRequestReviewCommentLinks;

  @SpeakeasyMetadata({ data: "json, name=author_association" })
  authorAssociation: AuthorAssociationEnum;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=body_html" })
  bodyHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=body_text" })
  bodyText?: string;

  @SpeakeasyMetadata({ data: "json, name=commit_id" })
  commitId: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=diff_hunk" })
  diffHunk: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=in_reply_to_id" })
  inReplyToId?: number;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=original_commit_id" })
  originalCommitId: string;

  @SpeakeasyMetadata({ data: "json, name=original_position" })
  originalPosition: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position: number;

  @SpeakeasyMetadata({ data: "json, name=pull_request_review_id" })
  pullRequestReviewId: number;

  @SpeakeasyMetadata({ data: "json, name=pull_request_url" })
  pullRequestUrl: string;

  @SpeakeasyMetadata({ data: "json, name=reactions" })
  reactions?: ReactionRollup;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: SimpleUser;
}
