import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Link } from "./link";
import { Link } from "./link";
import { Link } from "./link";
import { AuthorAssociationEnum } from "./authorassociationenum";


export class ReviewCommentLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=html" })
  html: Link;

  @Metadata({ data: "json, name=pull_request" })
  pullRequest: Link;

  @Metadata({ data: "json, name=self" })
  self: Link;
}

export enum ReviewCommentSideEnum {
    Left = "LEFT"
,    Right = "RIGHT"
}

export enum ReviewCommentStartSideEnum {
    Left = "LEFT"
,    Right = "RIGHT"
}


export class ReviewCommentSimpleUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @Metadata({ data: "json, name=followers_url" })
  followersUrl: string;

  @Metadata({ data: "json, name=following_url" })
  followingUrl: string;

  @Metadata({ data: "json, name=gists_url" })
  gistsUrl: string;

  @Metadata({ data: "json, name=gravatar_id" })
  gravatarId: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=organizations_url" })
  organizationsUrl: string;

  @Metadata({ data: "json, name=received_events_url" })
  receivedEventsUrl: string;

  @Metadata({ data: "json, name=repos_url" })
  reposUrl: string;

  @Metadata({ data: "json, name=site_admin" })
  siteAdmin: boolean;

  @Metadata({ data: "json, name=starred_at" })
  starredAt?: string;

  @Metadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @Metadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// ReviewComment
/** 
 * Legacy Review Comment
**/
export class ReviewComment extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links: ReviewCommentLinks;

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

  @Metadata({ data: "json, name=side" })
  side?: ReviewCommentSideEnum;

  @Metadata({ data: "json, name=start_line" })
  startLine?: number;

  @Metadata({ data: "json, name=start_side" })
  startSide?: ReviewCommentStartSideEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=user" })
  user: ReviewCommentSimpleUser;
}
