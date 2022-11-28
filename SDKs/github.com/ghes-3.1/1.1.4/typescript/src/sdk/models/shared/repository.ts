import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RepositoryLicenseSimple extends SpeakeasyBase {
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


export class RepositorySimpleUser extends SpeakeasyBase {
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


export class RepositoryPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin: boolean;

  @SpeakeasyMetadata({ data: "json, name=maintain" })
  maintain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pull" })
  pull: boolean;

  @SpeakeasyMetadata({ data: "json, name=push" })
  push: boolean;

  @SpeakeasyMetadata({ data: "json, name=triage" })
  triage?: boolean;
}


export class RepositoryTemplateRepositoryOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=followers_url" })
  followersUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=following_url" })
  followingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=gists_url" })
  gistsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=gravatar_id" })
  gravatarId?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=organizations_url" })
  organizationsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=received_events_url" })
  receivedEventsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=repos_url" })
  reposUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=site_admin" })
  siteAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=starred_url" })
  starredUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class RepositoryTemplateRepositoryPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pull" })
  pull?: boolean;

  @SpeakeasyMetadata({ data: "json, name=push" })
  push?: boolean;
}


export class RepositoryTemplateRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_merge_commit" })
  allowMergeCommit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_squash_merge" })
  allowSquashMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=archive_url" })
  archiveUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=assignees_url" })
  assigneesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=blobs_url" })
  blobsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=branches_url" })
  branchesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=clone_url" })
  cloneUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=collaborators_url" })
  collaboratorsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=comments_url" })
  commentsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=commits_url" })
  commitsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=compare_url" })
  compareUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=contents_url" })
  contentsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=contributors_url" })
  contributorsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=default_branch" })
  defaultBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" })
  deleteBranchOnMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deployments_url" })
  deploymentsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=downloads_url" })
  downloadsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=fork" })
  fork?: boolean;

  @SpeakeasyMetadata({ data: "json, name=forks_count" })
  forksCount?: number;

  @SpeakeasyMetadata({ data: "json, name=forks_url" })
  forksUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=full_name" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=git_commits_url" })
  gitCommitsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=git_refs_url" })
  gitRefsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=git_tags_url" })
  gitTagsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=git_url" })
  gitUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=has_downloads" })
  hasDownloads?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_issues" })
  hasIssues?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_pages" })
  hasPages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_projects" })
  hasProjects?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_wiki" })
  hasWiki?: boolean;

  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage?: string;

  @SpeakeasyMetadata({ data: "json, name=hooks_url" })
  hooksUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_template" })
  isTemplate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=issue_comment_url" })
  issueCommentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=issue_events_url" })
  issueEventsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=issues_url" })
  issuesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=keys_url" })
  keysUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=labels_url" })
  labelsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=languages_url" })
  languagesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=merges_url" })
  mergesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=milestones_url" })
  milestonesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=mirror_url" })
  mirrorUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network_count" })
  networkCount?: number;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=notifications_url" })
  notificationsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=open_issues_count" })
  openIssuesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: RepositoryTemplateRepositoryOwner;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: RepositoryTemplateRepositoryPermissions;

  @SpeakeasyMetadata({ data: "json, name=private" })
  private?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pulls_url" })
  pullsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=pushed_at" })
  pushedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=releases_url" })
  releasesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=ssh_url" })
  sshUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=stargazers_count" })
  stargazersCount?: number;

  @SpeakeasyMetadata({ data: "json, name=stargazers_url" })
  stargazersUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=statuses_url" })
  statusesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subscribers_count" })
  subscribersCount?: number;

  @SpeakeasyMetadata({ data: "json, name=subscribers_url" })
  subscribersUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subscription_url" })
  subscriptionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=svn_url" })
  svnUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=tags_url" })
  tagsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=teams_url" })
  teamsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=temp_clone_token" })
  tempCloneToken?: string;

  @SpeakeasyMetadata({ data: "json, name=topics" })
  topics?: string[];

  @SpeakeasyMetadata({ data: "json, name=trees_url" })
  treesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: string;

  @SpeakeasyMetadata({ data: "json, name=watchers_count" })
  watchersCount?: number;
}


// Repository
/** 
 * A git repository
**/
export class Repository extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" })
  deleteBranchOnMerge?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=is_template" })
  isTemplate?: boolean;

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
  license: RepositoryLicenseSimple;

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

  @SpeakeasyMetadata({ data: "json, name=network_count" })
  networkCount?: number;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=notifications_url" })
  notificationsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=open_issues" })
  openIssues: number;

  @SpeakeasyMetadata({ data: "json, name=open_issues_count" })
  openIssuesCount: number;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: RepositorySimpleUser;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner: RepositorySimpleUser;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: RepositoryPermissions;

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

  @SpeakeasyMetadata({ data: "json, name=starred_at" })
  starredAt?: string;

  @SpeakeasyMetadata({ data: "json, name=statuses_url" })
  statusesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=subscribers_count" })
  subscribersCount?: number;

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

  @SpeakeasyMetadata({ data: "json, name=template_repository" })
  templateRepository?: RepositoryTemplateRepository;

  @SpeakeasyMetadata({ data: "json, name=topics" })
  topics?: string[];

  @SpeakeasyMetadata({ data: "json, name=trees_url" })
  treesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: string;

  @SpeakeasyMetadata({ data: "json, name=watchers" })
  watchers: number;

  @SpeakeasyMetadata({ data: "json, name=watchers_count" })
  watchersCount: number;
}
