import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { SimpleUser } from "./simpleuser";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { TeamSimple } from "./teamsimple";



export class PullRequestLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments: Link;

  @SpeakeasyMetadata({ data: "json, name=commits" })
  commits: Link;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html: Link;

  @SpeakeasyMetadata({ data: "json, name=issue" })
  issue: Link;

  @SpeakeasyMetadata({ data: "json, name=review_comment" })
  reviewComment: Link;

  @SpeakeasyMetadata({ data: "json, name=review_comments" })
  reviewComments: Link;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: Link;

  @SpeakeasyMetadata({ data: "json, name=statuses" })
  statuses: Link;
}


export class PullRequestSimpleUser extends SpeakeasyBase {
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


export class PullRequestBaseRepoLicenseSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=spdx_id" })
  spdxId: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestBaseRepoOwner extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestBaseRepoPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin: boolean;

  @SpeakeasyMetadata({ data: "json, name=pull" })
  pull: boolean;

  @SpeakeasyMetadata({ data: "json, name=push" })
  push: boolean;
}


export class PullRequestBaseRepo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_merge_commit" })
  allowMergeCommit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_squash_merge" })
  allowSquashMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=archive_url" })
  archiveUrl: string;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived: boolean;

  @SpeakeasyMetadata({ data: "json, name=assignees_url" })
  assigneesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=blobs_url" })
  blobsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=branches_url" })
  branchesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=clone_url" })
  cloneUrl: string;

  @SpeakeasyMetadata({ data: "json, name=collaborators_url" })
  collaboratorsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=commits_url" })
  commitsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=compare_url" })
  compareUrl: string;

  @SpeakeasyMetadata({ data: "json, name=contents_url" })
  contentsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=contributors_url" })
  contributorsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=default_branch" })
  defaultBranch: string;

  @SpeakeasyMetadata({ data: "json, name=deployments_url" })
  deploymentsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=downloads_url" })
  downloadsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=fork" })
  fork: boolean;

  @SpeakeasyMetadata({ data: "json, name=forks" })
  forks: number;

  @SpeakeasyMetadata({ data: "json, name=forks_count" })
  forksCount: number;

  @SpeakeasyMetadata({ data: "json, name=forks_url" })
  forksUrl: string;

  @SpeakeasyMetadata({ data: "json, name=full_name" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=git_commits_url" })
  gitCommitsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=git_refs_url" })
  gitRefsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=git_tags_url" })
  gitTagsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=git_url" })
  gitUrl: string;

  @SpeakeasyMetadata({ data: "json, name=has_downloads" })
  hasDownloads: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_issues" })
  hasIssues: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_pages" })
  hasPages: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_projects" })
  hasProjects: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_wiki" })
  hasWiki: boolean;

  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage: string;

  @SpeakeasyMetadata({ data: "json, name=hooks_url" })
  hooksUrl: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=issue_comment_url" })
  issueCommentUrl: string;

  @SpeakeasyMetadata({ data: "json, name=issue_events_url" })
  issueEventsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=issues_url" })
  issuesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=keys_url" })
  keysUrl: string;

  @SpeakeasyMetadata({ data: "json, name=labels_url" })
  labelsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "json, name=languages_url" })
  languagesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license: PullRequestBaseRepoLicenseSimple;

  @SpeakeasyMetadata({ data: "json, name=master_branch" })
  masterBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=merges_url" })
  mergesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=milestones_url" })
  milestonesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=mirror_url" })
  mirrorUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=notifications_url" })
  notificationsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=open_issues" })
  openIssues: number;

  @SpeakeasyMetadata({ data: "json, name=open_issues_count" })
  openIssuesCount: number;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner: PullRequestBaseRepoOwner;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: PullRequestBaseRepoPermissions;

  @SpeakeasyMetadata({ data: "json, name=private" })
  private: boolean;

  @SpeakeasyMetadata({ data: "json, name=pulls_url" })
  pullsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=pushed_at" })
  pushedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=releases_url" })
  releasesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=ssh_url" })
  sshUrl: string;

  @SpeakeasyMetadata({ data: "json, name=stargazers_count" })
  stargazersCount: number;

  @SpeakeasyMetadata({ data: "json, name=stargazers_url" })
  stargazersUrl: string;

  @SpeakeasyMetadata({ data: "json, name=statuses_url" })
  statusesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=subscribers_url" })
  subscribersUrl: string;

  @SpeakeasyMetadata({ data: "json, name=subscription_url" })
  subscriptionUrl: string;

  @SpeakeasyMetadata({ data: "json, name=svn_url" })
  svnUrl: string;

  @SpeakeasyMetadata({ data: "json, name=tags_url" })
  tagsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=teams_url" })
  teamsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=temp_clone_token" })
  tempCloneToken?: string;

  @SpeakeasyMetadata({ data: "json, name=topics" })
  topics?: string[];

  @SpeakeasyMetadata({ data: "json, name=trees_url" })
  treesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=watchers" })
  watchers: number;

  @SpeakeasyMetadata({ data: "json, name=watchers_count" })
  watchersCount: number;
}


export class PullRequestBaseUser extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo: PullRequestBaseRepo;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: PullRequestBaseUser;
}


export class PullRequestHeadRepoLicense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=spdx_id" })
  spdxId: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestHeadRepoOwner extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestHeadRepoPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin: boolean;

  @SpeakeasyMetadata({ data: "json, name=pull" })
  pull: boolean;

  @SpeakeasyMetadata({ data: "json, name=push" })
  push: boolean;
}


export class PullRequestHeadRepo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_merge_commit" })
  allowMergeCommit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_squash_merge" })
  allowSquashMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=archive_url" })
  archiveUrl: string;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived: boolean;

  @SpeakeasyMetadata({ data: "json, name=assignees_url" })
  assigneesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=blobs_url" })
  blobsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=branches_url" })
  branchesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=clone_url" })
  cloneUrl: string;

  @SpeakeasyMetadata({ data: "json, name=collaborators_url" })
  collaboratorsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=commits_url" })
  commitsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=compare_url" })
  compareUrl: string;

  @SpeakeasyMetadata({ data: "json, name=contents_url" })
  contentsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=contributors_url" })
  contributorsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=default_branch" })
  defaultBranch: string;

  @SpeakeasyMetadata({ data: "json, name=deployments_url" })
  deploymentsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=downloads_url" })
  downloadsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=fork" })
  fork: boolean;

  @SpeakeasyMetadata({ data: "json, name=forks" })
  forks: number;

  @SpeakeasyMetadata({ data: "json, name=forks_count" })
  forksCount: number;

  @SpeakeasyMetadata({ data: "json, name=forks_url" })
  forksUrl: string;

  @SpeakeasyMetadata({ data: "json, name=full_name" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=git_commits_url" })
  gitCommitsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=git_refs_url" })
  gitRefsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=git_tags_url" })
  gitTagsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=git_url" })
  gitUrl: string;

  @SpeakeasyMetadata({ data: "json, name=has_downloads" })
  hasDownloads: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_issues" })
  hasIssues: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_pages" })
  hasPages: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_projects" })
  hasProjects: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_wiki" })
  hasWiki: boolean;

  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage: string;

  @SpeakeasyMetadata({ data: "json, name=hooks_url" })
  hooksUrl: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=issue_comment_url" })
  issueCommentUrl: string;

  @SpeakeasyMetadata({ data: "json, name=issue_events_url" })
  issueEventsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=issues_url" })
  issuesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=keys_url" })
  keysUrl: string;

  @SpeakeasyMetadata({ data: "json, name=labels_url" })
  labelsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "json, name=languages_url" })
  languagesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license: PullRequestHeadRepoLicense;

  @SpeakeasyMetadata({ data: "json, name=master_branch" })
  masterBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=merges_url" })
  mergesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=milestones_url" })
  milestonesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=mirror_url" })
  mirrorUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=notifications_url" })
  notificationsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=open_issues" })
  openIssues: number;

  @SpeakeasyMetadata({ data: "json, name=open_issues_count" })
  openIssuesCount: number;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner: PullRequestHeadRepoOwner;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: PullRequestHeadRepoPermissions;

  @SpeakeasyMetadata({ data: "json, name=private" })
  private: boolean;

  @SpeakeasyMetadata({ data: "json, name=pulls_url" })
  pullsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=pushed_at" })
  pushedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=releases_url" })
  releasesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=ssh_url" })
  sshUrl: string;

  @SpeakeasyMetadata({ data: "json, name=stargazers_count" })
  stargazersCount: number;

  @SpeakeasyMetadata({ data: "json, name=stargazers_url" })
  stargazersUrl: string;

  @SpeakeasyMetadata({ data: "json, name=statuses_url" })
  statusesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=subscribers_url" })
  subscribersUrl: string;

  @SpeakeasyMetadata({ data: "json, name=subscription_url" })
  subscriptionUrl: string;

  @SpeakeasyMetadata({ data: "json, name=svn_url" })
  svnUrl: string;

  @SpeakeasyMetadata({ data: "json, name=tags_url" })
  tagsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=teams_url" })
  teamsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=temp_clone_token" })
  tempCloneToken?: string;

  @SpeakeasyMetadata({ data: "json, name=topics" })
  topics?: string[];

  @SpeakeasyMetadata({ data: "json, name=trees_url" })
  treesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=watchers" })
  watchers: number;

  @SpeakeasyMetadata({ data: "json, name=watchers_count" })
  watchersCount: number;
}


export class PullRequestHeadUser extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestHead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo: PullRequestHeadRepo;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: PullRequestHeadUser;
}


export class PullRequestLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class PullRequestMilestoneSimpleUser extends SpeakeasyBase {
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

export enum PullRequestMilestoneStateEnum {
    Open = "open",
    Closed = "closed"
}


export class PullRequestMilestone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closed_at" })
  closedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=closed_issues" })
  closedIssues: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator: PullRequestMilestoneSimpleUser;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=due_on" })
  dueOn: Date;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels_url" })
  labelsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=open_issues" })
  openIssues: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: PullRequestMilestoneStateEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

export enum PullRequestStateEnum {
    Open = "open",
    Closed = "closed"
}


// PullRequest
/** 
 * Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
**/
export class PullRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: PullRequestLinks;

  @SpeakeasyMetadata({ data: "json, name=active_lock_reason" })
  activeLockReason?: string;

  @SpeakeasyMetadata({ data: "json, name=additions" })
  additions: number;

  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee: PullRequestSimpleUser;

  @SpeakeasyMetadata({ data: "json, name=assignees", elemType: SimpleUser })
  assignees?: SimpleUser[];

  @SpeakeasyMetadata({ data: "json, name=author_association" })
  authorAssociation: AuthorAssociationEnum;

  @SpeakeasyMetadata({ data: "json, name=base" })
  base: PullRequestBase;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=changed_files" })
  changedFiles: number;

  @SpeakeasyMetadata({ data: "json, name=closed_at" })
  closedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments: number;

  @SpeakeasyMetadata({ data: "json, name=comments_url" })
  commentsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=commits" })
  commits: number;

  @SpeakeasyMetadata({ data: "json, name=commits_url" })
  commitsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=deletions" })
  deletions: number;

  @SpeakeasyMetadata({ data: "json, name=diff_url" })
  diffUrl: string;

  @SpeakeasyMetadata({ data: "json, name=draft" })
  draft?: boolean;

  @SpeakeasyMetadata({ data: "json, name=head" })
  head: PullRequestHead;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=issue_url" })
  issueUrl: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: PullRequestLabels })
  labels: PullRequestLabels[];

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked: boolean;

  @SpeakeasyMetadata({ data: "json, name=maintainer_can_modify" })
  maintainerCanModify: boolean;

  @SpeakeasyMetadata({ data: "json, name=merge_commit_sha" })
  mergeCommitSha: string;

  @SpeakeasyMetadata({ data: "json, name=mergeable" })
  mergeable: boolean;

  @SpeakeasyMetadata({ data: "json, name=mergeable_state" })
  mergeableState: string;

  @SpeakeasyMetadata({ data: "json, name=merged" })
  merged: boolean;

  @SpeakeasyMetadata({ data: "json, name=merged_at" })
  mergedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=merged_by" })
  mergedBy: PullRequestSimpleUser;

  @SpeakeasyMetadata({ data: "json, name=milestone" })
  milestone: PullRequestMilestone;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=patch_url" })
  patchUrl: string;

  @SpeakeasyMetadata({ data: "json, name=rebaseable" })
  rebaseable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requested_reviewers", elemType: SimpleUser })
  requestedReviewers?: SimpleUser[];

  @SpeakeasyMetadata({ data: "json, name=requested_teams", elemType: TeamSimple })
  requestedTeams?: TeamSimple[];

  @SpeakeasyMetadata({ data: "json, name=review_comment_url" })
  reviewCommentUrl: string;

  @SpeakeasyMetadata({ data: "json, name=review_comments" })
  reviewComments: number;

  @SpeakeasyMetadata({ data: "json, name=review_comments_url" })
  reviewCommentsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: PullRequestStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statuses_url" })
  statusesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: PullRequestSimpleUser;
}
