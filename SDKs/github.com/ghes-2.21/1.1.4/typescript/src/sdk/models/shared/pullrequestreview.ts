import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";


export class PullRequestReviewLinksHtml extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;
}


export class PullRequestReviewLinksPullRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;
}


export class PullRequestReviewLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=html" })
  html: PullRequestReviewLinksHtml;

  @Metadata({ data: "json, name=pull_request" })
  pullRequest: PullRequestReviewLinksPullRequest;
}


export class PullRequestReviewSimpleUser extends SpeakeasyBase {
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


// PullRequestReview
/** 
 * Pull Request Reviews are reviews on pull requests.
**/
export class PullRequestReview extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links: PullRequestReviewLinks;

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

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=pull_request_url" })
  pullRequestUrl: string;

  @Metadata({ data: "json, name=state" })
  state: string;

  @Metadata({ data: "json, name=submitted_at" })
  submittedAt?: Date;

  @Metadata({ data: "json, name=user" })
  user: PullRequestReviewSimpleUser;
}
