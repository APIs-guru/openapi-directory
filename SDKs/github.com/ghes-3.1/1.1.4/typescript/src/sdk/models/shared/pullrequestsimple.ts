import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Link } from "./link";
import { Link } from "./link";
import { Link } from "./link";
import { Link } from "./link";
import { Link } from "./link";
import { Link } from "./link";
import { Link } from "./link";
import { Link } from "./link";
import { SimpleUser } from "./simpleuser";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { AutoMerge } from "./automerge";
import { Repository } from "./repository";
import { Repository } from "./repository";
import { SimpleUser } from "./simpleuser";
import { TeamSimple } from "./teamsimple";


export class PullRequestSimpleLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments: Link;

  @Metadata({ data: "json, name=commits" })
  commits: Link;

  @Metadata({ data: "json, name=html" })
  html: Link;

  @Metadata({ data: "json, name=issue" })
  issue: Link;

  @Metadata({ data: "json, name=review_comment" })
  reviewComment: Link;

  @Metadata({ data: "json, name=review_comments" })
  reviewComments: Link;

  @Metadata({ data: "json, name=self" })
  self: Link;

  @Metadata({ data: "json, name=statuses" })
  statuses: Link;
}


export class PullRequestSimpleSimpleUser extends SpeakeasyBase {
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


export class PullRequestSimpleBaseSimpleUser extends SpeakeasyBase {
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


export class PullRequestSimpleBase extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=ref" })
  ref: string;

  @Metadata({ data: "json, name=repo" })
  repo: Repository;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=user" })
  user: PullRequestSimpleBaseSimpleUser;
}


export class PullRequestSimpleHeadSimpleUser extends SpeakeasyBase {
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


export class PullRequestSimpleHead extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=ref" })
  ref: string;

  @Metadata({ data: "json, name=repo" })
  repo: Repository;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=user" })
  user: PullRequestSimpleHeadSimpleUser;
}


export class PullRequestSimpleLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=default" })
  default?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class PullRequestSimpleMilestoneSimpleUser extends SpeakeasyBase {
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

export enum PullRequestSimpleMilestoneStateEnum {
    Open = "open"
,    Closed = "closed"
}


export class PullRequestSimpleMilestone extends SpeakeasyBase {
  @Metadata({ data: "json, name=closed_at" })
  closedAt: Date;

  @Metadata({ data: "json, name=closed_issues" })
  closedIssues: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=creator" })
  creator: PullRequestSimpleMilestoneSimpleUser;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=due_on" })
  dueOn: Date;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels_url" })
  labelsUrl: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=open_issues" })
  openIssues: number;

  @Metadata({ data: "json, name=state" })
  state: PullRequestSimpleMilestoneStateEnum;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// PullRequestSimple
/** 
 * Pull Request Simple
**/
export class PullRequestSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links: PullRequestSimpleLinks;

  @Metadata({ data: "json, name=active_lock_reason" })
  activeLockReason?: string;

  @Metadata({ data: "json, name=assignee" })
  assignee: PullRequestSimpleSimpleUser;

  @Metadata({ data: "json, name=assignees", elemType: shared.SimpleUser })
  assignees?: SimpleUser[];

  @Metadata({ data: "json, name=author_association" })
  authorAssociation: AuthorAssociationEnum;

  @Metadata({ data: "json, name=auto_merge" })
  autoMerge: AutoMerge;

  @Metadata({ data: "json, name=base" })
  base: PullRequestSimpleBase;

  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=closed_at" })
  closedAt: Date;

  @Metadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @Metadata({ data: "json, name=commits_url" })
  commitsUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=diff_url" })
  diffUrl: string;

  @Metadata({ data: "json, name=draft" })
  draft?: boolean;

  @Metadata({ data: "json, name=head" })
  head: PullRequestSimpleHead;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=issue_url" })
  issueUrl: string;

  @Metadata({ data: "json, name=labels", elemType: shared.PullRequestSimpleLabels })
  labels: PullRequestSimpleLabels[];

  @Metadata({ data: "json, name=locked" })
  locked: boolean;

  @Metadata({ data: "json, name=merge_commit_sha" })
  mergeCommitSha: string;

  @Metadata({ data: "json, name=merged_at" })
  mergedAt: Date;

  @Metadata({ data: "json, name=milestone" })
  milestone: PullRequestSimpleMilestone;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=patch_url" })
  patchUrl: string;

  @Metadata({ data: "json, name=requested_reviewers", elemType: shared.SimpleUser })
  requestedReviewers?: SimpleUser[];

  @Metadata({ data: "json, name=requested_teams", elemType: shared.TeamSimple })
  requestedTeams?: TeamSimple[];

  @Metadata({ data: "json, name=review_comment_url" })
  reviewCommentUrl: string;

  @Metadata({ data: "json, name=review_comments_url" })
  reviewCommentsUrl: string;

  @Metadata({ data: "json, name=state" })
  state: string;

  @Metadata({ data: "json, name=statuses_url" })
  statusesUrl: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=user" })
  user: PullRequestSimpleSimpleUser;
}
