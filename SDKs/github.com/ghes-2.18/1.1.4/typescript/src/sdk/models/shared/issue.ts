import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimpleUser } from "./simpleuser";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { ReactionRollup } from "./reactionrollup";
import { Repository } from "./repository";


export class IssueSimpleUser extends SpeakeasyBase {
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


export class IssueLabels2 extends SpeakeasyBase {
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


export class IssueMilestoneSimpleUser extends SpeakeasyBase {
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

export enum IssueMilestoneStateEnum {
    Open = "open"
,    Closed = "closed"
}


export class IssueMilestone extends SpeakeasyBase {
  @Metadata({ data: "json, name=closed_at" })
  closedAt: Date;

  @Metadata({ data: "json, name=closed_issues" })
  closedIssues: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=creator" })
  creator: IssueMilestoneSimpleUser;

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
  state: IssueMilestoneStateEnum;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class IssuePullRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=diff_url" })
  diffUrl: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=merged_at" })
  mergedAt?: Date;

  @Metadata({ data: "json, name=patch_url" })
  patchUrl: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// Issue
/** 
 * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
**/
export class Issue extends SpeakeasyBase {
  @Metadata({ data: "json, name=active_lock_reason" })
  activeLockReason?: string;

  @Metadata({ data: "json, name=assignee" })
  assignee: IssueSimpleUser;

  @Metadata({ data: "json, name=assignees", elemType: shared.SimpleUser })
  assignees?: SimpleUser[];

  @Metadata({ data: "json, name=author_association" })
  authorAssociation: AuthorAssociationEnum;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=body_html" })
  bodyHtml?: string;

  @Metadata({ data: "json, name=body_text" })
  bodyText?: string;

  @Metadata({ data: "json, name=closed_at" })
  closedAt: Date;

  @Metadata({ data: "json, name=closed_by" })
  closedBy?: IssueSimpleUser;

  @Metadata({ data: "json, name=comments" })
  comments: number;

  @Metadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels" })
  labels: any[];

  @Metadata({ data: "json, name=labels_url" })
  labelsUrl: string;

  @Metadata({ data: "json, name=locked" })
  locked: boolean;

  @Metadata({ data: "json, name=milestone" })
  milestone: IssueMilestone;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=performed_via_github_app" })
  performedViaGithubApp?: Map<string, any>;

  @Metadata({ data: "json, name=pull_request" })
  pullRequest?: IssuePullRequest;

  @Metadata({ data: "json, name=reactions" })
  reactions?: ReactionRollup;

  @Metadata({ data: "json, name=repository" })
  repository?: Repository;

  @Metadata({ data: "json, name=repository_url" })
  repositoryUrl: string;

  @Metadata({ data: "json, name=state" })
  state: string;

  @Metadata({ data: "json, name=timeline_url" })
  timelineUrl?: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=user" })
  user: IssueSimpleUser;
}
