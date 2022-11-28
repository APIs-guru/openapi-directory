import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { AuthorAssociationEnum } from "./authorassociationenum";



export class ReviewCommentLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html" })
  html: Link;

  @SpeakeasyMetadata({ data: "json, name=pull_request" })
  pullRequest: Link;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: Link;
}

export enum ReviewCommentSideEnum {
    Left = "LEFT",
    Right = "RIGHT"
}

export enum ReviewCommentStartSideEnum {
    Left = "LEFT",
    Right = "RIGHT"
}


export class ReviewCommentSimpleUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=followers_url" })
  followersUrl: string;

  @SpeakeasyMetadata({ data: "json, name=following_url" })
  followingUrl: string;

  @SpeakeasyMetadata({ data: "json, name=gists_url" })
  gistsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=gravatar_id" })
  gravatarId: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=organizations_url" })
  organizationsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=received_events_url" })
  receivedEventsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=repos_url" })
  reposUrl: string;

  @SpeakeasyMetadata({ data: "json, name=site_admin" })
  siteAdmin: boolean;

  @SpeakeasyMetadata({ data: "json, name=starred_at" })
  starredAt?: string;

  @SpeakeasyMetadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


// ReviewComment
/** 
 * Legacy Review Comment
**/
export class ReviewComment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ReviewCommentLinks;

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

  @SpeakeasyMetadata({ data: "json, name=line" })
  line?: number;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=original_commit_id" })
  originalCommitId: string;

  @SpeakeasyMetadata({ data: "json, name=original_line" })
  originalLine?: number;

  @SpeakeasyMetadata({ data: "json, name=original_position" })
  originalPosition: number;

  @SpeakeasyMetadata({ data: "json, name=original_start_line" })
  originalStartLine?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position: number;

  @SpeakeasyMetadata({ data: "json, name=pull_request_review_id" })
  pullRequestReviewId: number;

  @SpeakeasyMetadata({ data: "json, name=pull_request_url" })
  pullRequestUrl: string;

  @SpeakeasyMetadata({ data: "json, name=side" })
  side?: ReviewCommentSideEnum;

  @SpeakeasyMetadata({ data: "json, name=start_line" })
  startLine?: number;

  @SpeakeasyMetadata({ data: "json, name=start_side" })
  startSide?: ReviewCommentStartSideEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: ReviewCommentSimpleUser;
}
