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
import { SimpleUser } from "./simpleuser";
import { TeamSimple } from "./teamsimple";


export class PullRequestLinks extends SpeakeasyBase {
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


export class PullRequestSimpleUser extends SpeakeasyBase {
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


export class PullRequestBaseRepoLicenseSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=spdx_id" })
  spdxId: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestBaseRepoOwner extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @Metadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestBaseRepoPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin: boolean;

  @Metadata({ data: "json, name=pull" })
  pull: boolean;

  @Metadata({ data: "json, name=push" })
  push: boolean;
}


export class PullRequestBaseRepo extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_merge_commit" })
  allowMergeCommit?: boolean;

  @Metadata({ data: "json, name=allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  @Metadata({ data: "json, name=allow_squash_merge" })
  allowSquashMerge?: boolean;

  @Metadata({ data: "json, name=archive_url" })
  archiveUrl: string;

  @Metadata({ data: "json, name=archived" })
  archived: boolean;

  @Metadata({ data: "json, name=assignees_url" })
  assigneesUrl: string;

  @Metadata({ data: "json, name=blobs_url" })
  blobsUrl: string;

  @Metadata({ data: "json, name=branches_url" })
  branchesUrl: string;

  @Metadata({ data: "json, name=clone_url" })
  cloneUrl: string;

  @Metadata({ data: "json, name=collaborators_url" })
  collaboratorsUrl: string;

  @Metadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @Metadata({ data: "json, name=commits_url" })
  commitsUrl: string;

  @Metadata({ data: "json, name=compare_url" })
  compareUrl: string;

  @Metadata({ data: "json, name=contents_url" })
  contentsUrl: string;

  @Metadata({ data: "json, name=contributors_url" })
  contributorsUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=default_branch" })
  defaultBranch: string;

  @Metadata({ data: "json, name=deployments_url" })
  deploymentsUrl: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=disabled" })
  disabled: boolean;

  @Metadata({ data: "json, name=downloads_url" })
  downloadsUrl: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @Metadata({ data: "json, name=fork" })
  fork: boolean;

  @Metadata({ data: "json, name=forks" })
  forks: number;

  @Metadata({ data: "json, name=forks_count" })
  forksCount: number;

  @Metadata({ data: "json, name=forks_url" })
  forksUrl: string;

  @Metadata({ data: "json, name=full_name" })
  fullName: string;

  @Metadata({ data: "json, name=git_commits_url" })
  gitCommitsUrl: string;

  @Metadata({ data: "json, name=git_refs_url" })
  gitRefsUrl: string;

  @Metadata({ data: "json, name=git_tags_url" })
  gitTagsUrl: string;

  @Metadata({ data: "json, name=git_url" })
  gitUrl: string;

  @Metadata({ data: "json, name=has_downloads" })
  hasDownloads: boolean;

  @Metadata({ data: "json, name=has_issues" })
  hasIssues: boolean;

  @Metadata({ data: "json, name=has_pages" })
  hasPages: boolean;

  @Metadata({ data: "json, name=has_projects" })
  hasProjects: boolean;

  @Metadata({ data: "json, name=has_wiki" })
  hasWiki: boolean;

  @Metadata({ data: "json, name=homepage" })
  homepage: string;

  @Metadata({ data: "json, name=hooks_url" })
  hooksUrl: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=issue_comment_url" })
  issueCommentUrl: string;

  @Metadata({ data: "json, name=issue_events_url" })
  issueEventsUrl: string;

  @Metadata({ data: "json, name=issues_url" })
  issuesUrl: string;

  @Metadata({ data: "json, name=keys_url" })
  keysUrl: string;

  @Metadata({ data: "json, name=labels_url" })
  labelsUrl: string;

  @Metadata({ data: "json, name=language" })
  language: string;

  @Metadata({ data: "json, name=languages_url" })
  languagesUrl: string;

  @Metadata({ data: "json, name=license" })
  license: PullRequestBaseRepoLicenseSimple;

  @Metadata({ data: "json, name=master_branch" })
  masterBranch?: string;

  @Metadata({ data: "json, name=merges_url" })
  mergesUrl: string;

  @Metadata({ data: "json, name=milestones_url" })
  milestonesUrl: string;

  @Metadata({ data: "json, name=mirror_url" })
  mirrorUrl: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=notifications_url" })
  notificationsUrl: string;

  @Metadata({ data: "json, name=open_issues" })
  openIssues: number;

  @Metadata({ data: "json, name=open_issues_count" })
  openIssuesCount: number;

  @Metadata({ data: "json, name=owner" })
  owner: PullRequestBaseRepoOwner;

  @Metadata({ data: "json, name=permissions" })
  permissions?: PullRequestBaseRepoPermissions;

  @Metadata({ data: "json, name=private" })
  private: boolean;

  @Metadata({ data: "json, name=pulls_url" })
  pullsUrl: string;

  @Metadata({ data: "json, name=pushed_at" })
  pushedAt: Date;

  @Metadata({ data: "json, name=releases_url" })
  releasesUrl: string;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=ssh_url" })
  sshUrl: string;

  @Metadata({ data: "json, name=stargazers_count" })
  stargazersCount: number;

  @Metadata({ data: "json, name=stargazers_url" })
  stargazersUrl: string;

  @Metadata({ data: "json, name=statuses_url" })
  statusesUrl: string;

  @Metadata({ data: "json, name=subscribers_url" })
  subscribersUrl: string;

  @Metadata({ data: "json, name=subscription_url" })
  subscriptionUrl: string;

  @Metadata({ data: "json, name=svn_url" })
  svnUrl: string;

  @Metadata({ data: "json, name=tags_url" })
  tagsUrl: string;

  @Metadata({ data: "json, name=teams_url" })
  teamsUrl: string;

  @Metadata({ data: "json, name=temp_clone_token" })
  tempCloneToken?: string;

  @Metadata({ data: "json, name=topics" })
  topics?: string[];

  @Metadata({ data: "json, name=trees_url" })
  treesUrl: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=watchers" })
  watchers: number;

  @Metadata({ data: "json, name=watchers_count" })
  watchersCount: number;
}


export class PullRequestBaseUser extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @Metadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestBase extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=ref" })
  ref: string;

  @Metadata({ data: "json, name=repo" })
  repo: PullRequestBaseRepo;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=user" })
  user: PullRequestBaseUser;
}


export class PullRequestHeadRepoLicense extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=spdx_id" })
  spdxId: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestHeadRepoOwner extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @Metadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestHeadRepoPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin: boolean;

  @Metadata({ data: "json, name=pull" })
  pull: boolean;

  @Metadata({ data: "json, name=push" })
  push: boolean;
}


export class PullRequestHeadRepo extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_merge_commit" })
  allowMergeCommit?: boolean;

  @Metadata({ data: "json, name=allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  @Metadata({ data: "json, name=allow_squash_merge" })
  allowSquashMerge?: boolean;

  @Metadata({ data: "json, name=archive_url" })
  archiveUrl: string;

  @Metadata({ data: "json, name=archived" })
  archived: boolean;

  @Metadata({ data: "json, name=assignees_url" })
  assigneesUrl: string;

  @Metadata({ data: "json, name=blobs_url" })
  blobsUrl: string;

  @Metadata({ data: "json, name=branches_url" })
  branchesUrl: string;

  @Metadata({ data: "json, name=clone_url" })
  cloneUrl: string;

  @Metadata({ data: "json, name=collaborators_url" })
  collaboratorsUrl: string;

  @Metadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @Metadata({ data: "json, name=commits_url" })
  commitsUrl: string;

  @Metadata({ data: "json, name=compare_url" })
  compareUrl: string;

  @Metadata({ data: "json, name=contents_url" })
  contentsUrl: string;

  @Metadata({ data: "json, name=contributors_url" })
  contributorsUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=default_branch" })
  defaultBranch: string;

  @Metadata({ data: "json, name=deployments_url" })
  deploymentsUrl: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=disabled" })
  disabled: boolean;

  @Metadata({ data: "json, name=downloads_url" })
  downloadsUrl: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @Metadata({ data: "json, name=fork" })
  fork: boolean;

  @Metadata({ data: "json, name=forks" })
  forks: number;

  @Metadata({ data: "json, name=forks_count" })
  forksCount: number;

  @Metadata({ data: "json, name=forks_url" })
  forksUrl: string;

  @Metadata({ data: "json, name=full_name" })
  fullName: string;

  @Metadata({ data: "json, name=git_commits_url" })
  gitCommitsUrl: string;

  @Metadata({ data: "json, name=git_refs_url" })
  gitRefsUrl: string;

  @Metadata({ data: "json, name=git_tags_url" })
  gitTagsUrl: string;

  @Metadata({ data: "json, name=git_url" })
  gitUrl: string;

  @Metadata({ data: "json, name=has_downloads" })
  hasDownloads: boolean;

  @Metadata({ data: "json, name=has_issues" })
  hasIssues: boolean;

  @Metadata({ data: "json, name=has_pages" })
  hasPages: boolean;

  @Metadata({ data: "json, name=has_projects" })
  hasProjects: boolean;

  @Metadata({ data: "json, name=has_wiki" })
  hasWiki: boolean;

  @Metadata({ data: "json, name=homepage" })
  homepage: string;

  @Metadata({ data: "json, name=hooks_url" })
  hooksUrl: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=issue_comment_url" })
  issueCommentUrl: string;

  @Metadata({ data: "json, name=issue_events_url" })
  issueEventsUrl: string;

  @Metadata({ data: "json, name=issues_url" })
  issuesUrl: string;

  @Metadata({ data: "json, name=keys_url" })
  keysUrl: string;

  @Metadata({ data: "json, name=labels_url" })
  labelsUrl: string;

  @Metadata({ data: "json, name=language" })
  language: string;

  @Metadata({ data: "json, name=languages_url" })
  languagesUrl: string;

  @Metadata({ data: "json, name=license" })
  license: PullRequestHeadRepoLicense;

  @Metadata({ data: "json, name=master_branch" })
  masterBranch?: string;

  @Metadata({ data: "json, name=merges_url" })
  mergesUrl: string;

  @Metadata({ data: "json, name=milestones_url" })
  milestonesUrl: string;

  @Metadata({ data: "json, name=mirror_url" })
  mirrorUrl: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=notifications_url" })
  notificationsUrl: string;

  @Metadata({ data: "json, name=open_issues" })
  openIssues: number;

  @Metadata({ data: "json, name=open_issues_count" })
  openIssuesCount: number;

  @Metadata({ data: "json, name=owner" })
  owner: PullRequestHeadRepoOwner;

  @Metadata({ data: "json, name=permissions" })
  permissions?: PullRequestHeadRepoPermissions;

  @Metadata({ data: "json, name=private" })
  private: boolean;

  @Metadata({ data: "json, name=pulls_url" })
  pullsUrl: string;

  @Metadata({ data: "json, name=pushed_at" })
  pushedAt: Date;

  @Metadata({ data: "json, name=releases_url" })
  releasesUrl: string;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=ssh_url" })
  sshUrl: string;

  @Metadata({ data: "json, name=stargazers_count" })
  stargazersCount: number;

  @Metadata({ data: "json, name=stargazers_url" })
  stargazersUrl: string;

  @Metadata({ data: "json, name=statuses_url" })
  statusesUrl: string;

  @Metadata({ data: "json, name=subscribers_url" })
  subscribersUrl: string;

  @Metadata({ data: "json, name=subscription_url" })
  subscriptionUrl: string;

  @Metadata({ data: "json, name=svn_url" })
  svnUrl: string;

  @Metadata({ data: "json, name=tags_url" })
  tagsUrl: string;

  @Metadata({ data: "json, name=teams_url" })
  teamsUrl: string;

  @Metadata({ data: "json, name=temp_clone_token" })
  tempCloneToken?: string;

  @Metadata({ data: "json, name=topics" })
  topics?: string[];

  @Metadata({ data: "json, name=trees_url" })
  treesUrl: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=watchers" })
  watchers: number;

  @Metadata({ data: "json, name=watchers_count" })
  watchersCount: number;
}


export class PullRequestHeadUser extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @Metadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestHead extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=ref" })
  ref: string;

  @Metadata({ data: "json, name=repo" })
  repo: PullRequestHeadRepo;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=user" })
  user: PullRequestHeadUser;
}


export class PullRequestLabels extends SpeakeasyBase {
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


export class PullRequestMilestoneSimpleUser extends SpeakeasyBase {
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

export enum PullRequestMilestoneStateEnum {
    Open = "open"
,    Closed = "closed"
}


export class PullRequestMilestone extends SpeakeasyBase {
  @Metadata({ data: "json, name=closed_at" })
  closedAt: Date;

  @Metadata({ data: "json, name=closed_issues" })
  closedIssues: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=creator" })
  creator: PullRequestMilestoneSimpleUser;

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
  state: PullRequestMilestoneStateEnum;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}

export enum PullRequestStateEnum {
    Open = "open"
,    Closed = "closed"
}


// PullRequest
/** 
 * Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
**/
export class PullRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links: PullRequestLinks;

  @Metadata({ data: "json, name=active_lock_reason" })
  activeLockReason?: string;

  @Metadata({ data: "json, name=additions" })
  additions: number;

  @Metadata({ data: "json, name=assignee" })
  assignee: PullRequestSimpleUser;

  @Metadata({ data: "json, name=assignees", elemType: shared.SimpleUser })
  assignees?: SimpleUser[];

  @Metadata({ data: "json, name=author_association" })
  authorAssociation: AuthorAssociationEnum;

  @Metadata({ data: "json, name=base" })
  base: PullRequestBase;

  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=changed_files" })
  changedFiles: number;

  @Metadata({ data: "json, name=closed_at" })
  closedAt: Date;

  @Metadata({ data: "json, name=comments" })
  comments: number;

  @Metadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @Metadata({ data: "json, name=commits" })
  commits: number;

  @Metadata({ data: "json, name=commits_url" })
  commitsUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=deletions" })
  deletions: number;

  @Metadata({ data: "json, name=diff_url" })
  diffUrl: string;

  @Metadata({ data: "json, name=draft" })
  draft?: boolean;

  @Metadata({ data: "json, name=head" })
  head: PullRequestHead;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=issue_url" })
  issueUrl: string;

  @Metadata({ data: "json, name=labels", elemType: shared.PullRequestLabels })
  labels: PullRequestLabels[];

  @Metadata({ data: "json, name=locked" })
  locked: boolean;

  @Metadata({ data: "json, name=maintainer_can_modify" })
  maintainerCanModify: boolean;

  @Metadata({ data: "json, name=merge_commit_sha" })
  mergeCommitSha: string;

  @Metadata({ data: "json, name=mergeable" })
  mergeable: boolean;

  @Metadata({ data: "json, name=mergeable_state" })
  mergeableState: string;

  @Metadata({ data: "json, name=merged" })
  merged: boolean;

  @Metadata({ data: "json, name=merged_at" })
  mergedAt: Date;

  @Metadata({ data: "json, name=merged_by" })
  mergedBy: PullRequestSimpleUser;

  @Metadata({ data: "json, name=milestone" })
  milestone: PullRequestMilestone;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=patch_url" })
  patchUrl: string;

  @Metadata({ data: "json, name=rebaseable" })
  rebaseable?: boolean;

  @Metadata({ data: "json, name=requested_reviewers", elemType: shared.SimpleUser })
  requestedReviewers?: SimpleUser[];

  @Metadata({ data: "json, name=requested_teams", elemType: shared.TeamSimple })
  requestedTeams?: TeamSimple[];

  @Metadata({ data: "json, name=review_comment_url" })
  reviewCommentUrl: string;

  @Metadata({ data: "json, name=review_comments" })
  reviewComments: number;

  @Metadata({ data: "json, name=review_comments_url" })
  reviewCommentsUrl: string;

  @Metadata({ data: "json, name=state" })
  state: PullRequestStateEnum;

  @Metadata({ data: "json, name=statuses_url" })
  statusesUrl: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=user" })
  user: PullRequestSimpleUser;
}
