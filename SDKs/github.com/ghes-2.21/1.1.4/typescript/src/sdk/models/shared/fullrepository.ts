import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeOfConductSimple } from "./codeofconductsimple";
import { SimpleUser } from "./simpleuser";
import { Repository } from "./repository";
import { Repository } from "./repository";


export class FullRepositoryLicenseSimple extends SpeakeasyBase {
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


export class FullRepositorySimpleUser extends SpeakeasyBase {
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


export class FullRepositoryPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin: boolean;

  @Metadata({ data: "json, name=pull" })
  pull: boolean;

  @Metadata({ data: "json, name=push" })
  push: boolean;
}


export class FullRepositoryRepositoryLicenseSimple extends SpeakeasyBase {
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


export class FullRepositoryRepositorySimpleUser extends SpeakeasyBase {
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


export class FullRepositoryRepositoryPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin: boolean;

  @Metadata({ data: "json, name=maintain" })
  maintain?: boolean;

  @Metadata({ data: "json, name=pull" })
  pull: boolean;

  @Metadata({ data: "json, name=push" })
  push: boolean;

  @Metadata({ data: "json, name=triage" })
  triage?: boolean;
}


export class FullRepositoryRepositoryTemplateRepositoryOwner extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @Metadata({ data: "json, name=followers_url" })
  followersUrl?: string;

  @Metadata({ data: "json, name=following_url" })
  followingUrl?: string;

  @Metadata({ data: "json, name=gists_url" })
  gistsUrl?: string;

  @Metadata({ data: "json, name=gravatar_id" })
  gravatarId?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=organizations_url" })
  organizationsUrl?: string;

  @Metadata({ data: "json, name=received_events_url" })
  receivedEventsUrl?: string;

  @Metadata({ data: "json, name=repos_url" })
  reposUrl?: string;

  @Metadata({ data: "json, name=site_admin" })
  siteAdmin?: boolean;

  @Metadata({ data: "json, name=starred_url" })
  starredUrl?: string;

  @Metadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class FullRepositoryRepositoryTemplateRepositoryPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin?: boolean;

  @Metadata({ data: "json, name=pull" })
  pull?: boolean;

  @Metadata({ data: "json, name=push" })
  push?: boolean;
}


export class FullRepositoryRepositoryTemplateRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_merge_commit" })
  allowMergeCommit?: boolean;

  @Metadata({ data: "json, name=allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  @Metadata({ data: "json, name=allow_squash_merge" })
  allowSquashMerge?: boolean;

  @Metadata({ data: "json, name=anonymous_access_enabled" })
  anonymousAccessEnabled?: boolean;

  @Metadata({ data: "json, name=archive_url" })
  archiveUrl?: string;

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=assignees_url" })
  assigneesUrl?: string;

  @Metadata({ data: "json, name=blobs_url" })
  blobsUrl?: string;

  @Metadata({ data: "json, name=branches_url" })
  branchesUrl?: string;

  @Metadata({ data: "json, name=clone_url" })
  cloneUrl?: string;

  @Metadata({ data: "json, name=collaborators_url" })
  collaboratorsUrl?: string;

  @Metadata({ data: "json, name=comments_url" })
  commentsUrl?: string;

  @Metadata({ data: "json, name=commits_url" })
  commitsUrl?: string;

  @Metadata({ data: "json, name=compare_url" })
  compareUrl?: string;

  @Metadata({ data: "json, name=contents_url" })
  contentsUrl?: string;

  @Metadata({ data: "json, name=contributors_url" })
  contributorsUrl?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=default_branch" })
  defaultBranch?: string;

  @Metadata({ data: "json, name=delete_branch_on_merge" })
  deleteBranchOnMerge?: boolean;

  @Metadata({ data: "json, name=deployments_url" })
  deploymentsUrl?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=downloads_url" })
  downloadsUrl?: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @Metadata({ data: "json, name=fork" })
  fork?: boolean;

  @Metadata({ data: "json, name=forks_count" })
  forksCount?: number;

  @Metadata({ data: "json, name=forks_url" })
  forksUrl?: string;

  @Metadata({ data: "json, name=full_name" })
  fullName?: string;

  @Metadata({ data: "json, name=git_commits_url" })
  gitCommitsUrl?: string;

  @Metadata({ data: "json, name=git_refs_url" })
  gitRefsUrl?: string;

  @Metadata({ data: "json, name=git_tags_url" })
  gitTagsUrl?: string;

  @Metadata({ data: "json, name=git_url" })
  gitUrl?: string;

  @Metadata({ data: "json, name=has_downloads" })
  hasDownloads?: boolean;

  @Metadata({ data: "json, name=has_issues" })
  hasIssues?: boolean;

  @Metadata({ data: "json, name=has_pages" })
  hasPages?: boolean;

  @Metadata({ data: "json, name=has_projects" })
  hasProjects?: boolean;

  @Metadata({ data: "json, name=has_wiki" })
  hasWiki?: boolean;

  @Metadata({ data: "json, name=homepage" })
  homepage?: string;

  @Metadata({ data: "json, name=hooks_url" })
  hooksUrl?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_template" })
  isTemplate?: boolean;

  @Metadata({ data: "json, name=issue_comment_url" })
  issueCommentUrl?: string;

  @Metadata({ data: "json, name=issue_events_url" })
  issueEventsUrl?: string;

  @Metadata({ data: "json, name=issues_url" })
  issuesUrl?: string;

  @Metadata({ data: "json, name=keys_url" })
  keysUrl?: string;

  @Metadata({ data: "json, name=labels_url" })
  labelsUrl?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=languages_url" })
  languagesUrl?: string;

  @Metadata({ data: "json, name=merges_url" })
  mergesUrl?: string;

  @Metadata({ data: "json, name=milestones_url" })
  milestonesUrl?: string;

  @Metadata({ data: "json, name=mirror_url" })
  mirrorUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network_count" })
  networkCount?: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=notifications_url" })
  notificationsUrl?: string;

  @Metadata({ data: "json, name=open_issues_count" })
  openIssuesCount?: number;

  @Metadata({ data: "json, name=owner" })
  owner?: FullRepositoryRepositoryTemplateRepositoryOwner;

  @Metadata({ data: "json, name=permissions" })
  permissions?: FullRepositoryRepositoryTemplateRepositoryPermissions;

  @Metadata({ data: "json, name=private" })
  private?: boolean;

  @Metadata({ data: "json, name=pulls_url" })
  pullsUrl?: string;

  @Metadata({ data: "json, name=pushed_at" })
  pushedAt?: string;

  @Metadata({ data: "json, name=releases_url" })
  releasesUrl?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=ssh_url" })
  sshUrl?: string;

  @Metadata({ data: "json, name=stargazers_count" })
  stargazersCount?: number;

  @Metadata({ data: "json, name=stargazers_url" })
  stargazersUrl?: string;

  @Metadata({ data: "json, name=statuses_url" })
  statusesUrl?: string;

  @Metadata({ data: "json, name=subscribers_count" })
  subscribersCount?: number;

  @Metadata({ data: "json, name=subscribers_url" })
  subscribersUrl?: string;

  @Metadata({ data: "json, name=subscription_url" })
  subscriptionUrl?: string;

  @Metadata({ data: "json, name=svn_url" })
  svnUrl?: string;

  @Metadata({ data: "json, name=tags_url" })
  tagsUrl?: string;

  @Metadata({ data: "json, name=teams_url" })
  teamsUrl?: string;

  @Metadata({ data: "json, name=topics" })
  topics?: string[];

  @Metadata({ data: "json, name=trees_url" })
  treesUrl?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: string;

  @Metadata({ data: "json, name=watchers_count" })
  watchersCount?: number;
}


export class FullRepositoryRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_merge_commit" })
  allowMergeCommit?: boolean;

  @Metadata({ data: "json, name=allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  @Metadata({ data: "json, name=allow_squash_merge" })
  allowSquashMerge?: boolean;

  @Metadata({ data: "json, name=anonymous_access_enabled" })
  anonymousAccessEnabled?: boolean;

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

  @Metadata({ data: "json, name=delete_branch_on_merge" })
  deleteBranchOnMerge?: boolean;

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

  @Metadata({ data: "json, name=is_template" })
  isTemplate?: boolean;

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
  license: FullRepositoryRepositoryLicenseSimple;

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

  @Metadata({ data: "json, name=network_count" })
  networkCount?: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=notifications_url" })
  notificationsUrl: string;

  @Metadata({ data: "json, name=open_issues" })
  openIssues: number;

  @Metadata({ data: "json, name=open_issues_count" })
  openIssuesCount: number;

  @Metadata({ data: "json, name=organization" })
  organization?: FullRepositoryRepositorySimpleUser;

  @Metadata({ data: "json, name=owner" })
  owner: FullRepositoryRepositorySimpleUser;

  @Metadata({ data: "json, name=permissions" })
  permissions?: FullRepositoryRepositoryPermissions;

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

  @Metadata({ data: "json, name=starred_at" })
  starredAt?: string;

  @Metadata({ data: "json, name=statuses_url" })
  statusesUrl: string;

  @Metadata({ data: "json, name=subscribers_count" })
  subscribersCount?: number;

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

  @Metadata({ data: "json, name=template_repository" })
  templateRepository?: FullRepositoryRepositoryTemplateRepository;

  @Metadata({ data: "json, name=topics" })
  topics?: string[];

  @Metadata({ data: "json, name=trees_url" })
  treesUrl: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: string;

  @Metadata({ data: "json, name=watchers" })
  watchers: number;

  @Metadata({ data: "json, name=watchers_count" })
  watchersCount: number;
}


// FullRepository
/** 
 * Full Repository
**/
export class FullRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_merge_commit" })
  allowMergeCommit?: boolean;

  @Metadata({ data: "json, name=allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  @Metadata({ data: "json, name=allow_squash_merge" })
  allowSquashMerge?: boolean;

  @Metadata({ data: "json, name=anonymous_access_enabled" })
  anonymousAccessEnabled?: boolean;

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

  @Metadata({ data: "json, name=code_of_conduct" })
  codeOfConduct?: CodeOfConductSimple;

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

  @Metadata({ data: "json, name=delete_branch_on_merge" })
  deleteBranchOnMerge?: boolean;

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

  @Metadata({ data: "json, name=has_advanced_security" })
  hasAdvancedSecurity?: boolean;

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

  @Metadata({ data: "json, name=is_template" })
  isTemplate?: boolean;

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
  license: FullRepositoryLicenseSimple;

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

  @Metadata({ data: "json, name=network_count" })
  networkCount: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=notifications_url" })
  notificationsUrl: string;

  @Metadata({ data: "json, name=open_issues" })
  openIssues: number;

  @Metadata({ data: "json, name=open_issues_count" })
  openIssuesCount: number;

  @Metadata({ data: "json, name=organization" })
  organization?: FullRepositorySimpleUser;

  @Metadata({ data: "json, name=owner" })
  owner: SimpleUser;

  @Metadata({ data: "json, name=parent" })
  parent?: Repository;

  @Metadata({ data: "json, name=permissions" })
  permissions?: FullRepositoryPermissions;

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

  @Metadata({ data: "json, name=source" })
  source?: Repository;

  @Metadata({ data: "json, name=ssh_url" })
  sshUrl: string;

  @Metadata({ data: "json, name=stargazers_count" })
  stargazersCount: number;

  @Metadata({ data: "json, name=stargazers_url" })
  stargazersUrl: string;

  @Metadata({ data: "json, name=statuses_url" })
  statusesUrl: string;

  @Metadata({ data: "json, name=subscribers_count" })
  subscribersCount: number;

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

  @Metadata({ data: "json, name=template_repository" })
  templateRepository?: FullRepositoryRepository;

  @Metadata({ data: "json, name=topics" })
  topics?: string[];

  @Metadata({ data: "json, name=trees_url" })
  treesUrl: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: string;

  @Metadata({ data: "json, name=watchers" })
  watchers: number;

  @Metadata({ data: "json, name=watchers_count" })
  watchersCount: number;
}
