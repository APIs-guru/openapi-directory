from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PackageSimpleUser:
    avatar_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    followers_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers_url') }})
    following_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following_url') }})
    gists_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gists_url') }})
    gravatar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatar_id') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organizations_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations_url') }})
    received_events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_events_url') }})
    repos_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    site_admin: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_admin') }})
    starred_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_url') }})
    subscriptions_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions_url') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    starred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_at') }})
    
class PackagePackageTypeEnum(str, Enum):
    NPM = "npm"
    MAVEN = "maven"
    RUBYGEMS = "rubygems"
    DOCKER = "docker"
    NUGET = "nuget"
    CONTAINER = "container"


@dataclass_json
@dataclass
class PackageMinimalRepositoryLicense:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    spdx_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdx_id') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PackageMinimalRepositorySimpleUser:
    avatar_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    followers_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers_url') }})
    following_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following_url') }})
    gists_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gists_url') }})
    gravatar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatar_id') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organizations_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations_url') }})
    received_events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_events_url') }})
    repos_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    site_admin: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_admin') }})
    starred_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_url') }})
    subscriptions_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions_url') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    starred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_at') }})
    

@dataclass_json
@dataclass
class PackageMinimalRepositoryPermissions:
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    pull: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull') }})
    push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    

@dataclass_json
@dataclass
class PackageMinimalRepositoryRepositoryLicenseSimple:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    spdx_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdx_id') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    

@dataclass_json
@dataclass
class PackageMinimalRepositoryRepositorySimpleUser:
    avatar_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    followers_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers_url') }})
    following_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following_url') }})
    gists_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gists_url') }})
    gravatar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatar_id') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organizations_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations_url') }})
    received_events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_events_url') }})
    repos_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    site_admin: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_admin') }})
    starred_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_url') }})
    subscriptions_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions_url') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    starred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_at') }})
    

@dataclass_json
@dataclass
class PackageMinimalRepositoryRepositoryPermissions:
    admin: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    pull: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull') }})
    push: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    maintain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintain') }})
    triage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triage') }})
    

@dataclass_json
@dataclass
class PackageMinimalRepositoryRepositoryTemplateRepositoryOwner:
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    followers_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers_url') }})
    following_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('following_url') }})
    gists_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gists_url') }})
    gravatar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatar_id') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organizations_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations_url') }})
    received_events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_events_url') }})
    repos_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    site_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_admin') }})
    starred_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_url') }})
    subscriptions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions_url') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PackageMinimalRepositoryRepositoryTemplateRepositoryPermissions:
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    pull: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull') }})
    push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    

@dataclass_json
@dataclass
class PackageMinimalRepositoryRepositoryTemplateRepository:
    allow_merge_commit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_merge_commit') }})
    allow_rebase_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_rebase_merge') }})
    allow_squash_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_squash_merge') }})
    archive_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archive_url') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    assignees_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignees_url') }})
    blobs_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobs_url') }})
    branches_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branches_url') }})
    clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clone_url') }})
    collaborators_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators_url') }})
    comments_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments_url') }})
    commits_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commits_url') }})
    compare_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compare_url') }})
    contents_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents_url') }})
    contributors_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributors_url') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    default_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_branch') }})
    delete_branch_on_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete_branch_on_merge') }})
    deployments_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments_url') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    downloads_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloads_url') }})
    events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    fork: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fork') }})
    forks_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forks_count') }})
    forks_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forks_url') }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('full_name') }})
    git_commits_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_commits_url') }})
    git_refs_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_refs_url') }})
    git_tags_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_tags_url') }})
    git_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_url') }})
    has_downloads: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_downloads') }})
    has_issues: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_issues') }})
    has_pages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_pages') }})
    has_projects: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_projects') }})
    has_wiki: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_wiki') }})
    homepage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepage') }})
    hooks_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooks_url') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_template: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_template') }})
    issue_comment_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_comment_url') }})
    issue_events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_events_url') }})
    issues_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues_url') }})
    keys_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys_url') }})
    labels_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels_url') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    languages_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages_url') }})
    merges_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merges_url') }})
    milestones_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestones_url') }})
    mirror_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mirror_url') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_count') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    notifications_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications_url') }})
    open_issues_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues_count') }})
    owner: Optional[PackageMinimalRepositoryRepositoryTemplateRepositoryOwner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    permissions: Optional[PackageMinimalRepositoryRepositoryTemplateRepositoryPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    pulls_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pulls_url') }})
    pushed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushed_at') }})
    releases_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releases_url') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    ssh_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_url') }})
    stargazers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stargazers_count') }})
    stargazers_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stargazers_url') }})
    statuses_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses_url') }})
    subscribers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribers_count') }})
    subscribers_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribers_url') }})
    subscription_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription_url') }})
    svn_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('svn_url') }})
    tags_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags_url') }})
    teams_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams_url') }})
    temp_clone_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temp_clone_token') }})
    topics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    trees_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trees_url') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    visibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    watchers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchers_count') }})
    

@dataclass_json
@dataclass
class PackageMinimalRepositoryRepository:
    archive_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('archive_url') }})
    archived: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    assignees_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignees_url') }})
    blobs_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobs_url') }})
    branches_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branches_url') }})
    clone_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clone_url') }})
    collaborators_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators_url') }})
    comments_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments_url') }})
    commits_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commits_url') }})
    compare_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compare_url') }})
    contents_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents_url') }})
    contributors_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributors_url') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_branch: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_branch') }})
    deployments_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments_url') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    downloads_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloads_url') }})
    events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    fork: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fork') }})
    forks: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forks') }})
    forks_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forks_count') }})
    forks_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forks_url') }})
    full_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('full_name') }})
    git_commits_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_commits_url') }})
    git_refs_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_refs_url') }})
    git_tags_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_tags_url') }})
    git_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_url') }})
    has_downloads: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_downloads') }})
    has_issues: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_issues') }})
    has_pages: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_pages') }})
    has_projects: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_projects') }})
    has_wiki: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_wiki') }})
    homepage: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepage') }})
    hooks_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooks_url') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    issue_comment_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_comment_url') }})
    issue_events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_events_url') }})
    issues_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues_url') }})
    keys_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys_url') }})
    labels_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels_url') }})
    language: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    languages_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages_url') }})
    license: PackageMinimalRepositoryRepositoryLicenseSimple = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    merges_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merges_url') }})
    milestones_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestones_url') }})
    mirror_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mirror_url') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    notifications_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications_url') }})
    open_issues: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues') }})
    open_issues_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues_count') }})
    owner: PackageMinimalRepositoryRepositorySimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    private: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    pulls_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pulls_url') }})
    pushed_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushed_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    releases_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('releases_url') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    ssh_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_url') }})
    stargazers_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stargazers_count') }})
    stargazers_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stargazers_url') }})
    statuses_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses_url') }})
    subscribers_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribers_url') }})
    subscription_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription_url') }})
    svn_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('svn_url') }})
    tags_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags_url') }})
    teams_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams_url') }})
    trees_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trees_url') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    watchers: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchers') }})
    watchers_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchers_count') }})
    allow_merge_commit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_merge_commit') }})
    allow_rebase_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_rebase_merge') }})
    allow_squash_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_squash_merge') }})
    delete_branch_on_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete_branch_on_merge') }})
    is_template: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_template') }})
    master_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('master_branch') }})
    network_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_count') }})
    permissions: Optional[PackageMinimalRepositoryRepositoryPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    starred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_at') }})
    subscribers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribers_count') }})
    temp_clone_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temp_clone_token') }})
    template_repository: Optional[PackageMinimalRepositoryRepositoryTemplateRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_repository') }})
    topics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    visibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    

@dataclass_json
@dataclass
class PackageMinimalRepository:
    archive_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('archive_url') }})
    assignees_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignees_url') }})
    blobs_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobs_url') }})
    branches_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branches_url') }})
    collaborators_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators_url') }})
    comments_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments_url') }})
    commits_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commits_url') }})
    compare_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compare_url') }})
    contents_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents_url') }})
    contributors_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributors_url') }})
    deployments_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments_url') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    downloads_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloads_url') }})
    events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    fork: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fork') }})
    forks_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forks_url') }})
    full_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('full_name') }})
    git_commits_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_commits_url') }})
    git_refs_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_refs_url') }})
    git_tags_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_tags_url') }})
    hooks_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooks_url') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    issue_comment_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_comment_url') }})
    issue_events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_events_url') }})
    issues_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues_url') }})
    keys_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys_url') }})
    labels_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels_url') }})
    languages_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages_url') }})
    merges_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merges_url') }})
    milestones_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestones_url') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    notifications_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications_url') }})
    owner: PackageMinimalRepositorySimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    private: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    pulls_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pulls_url') }})
    releases_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('releases_url') }})
    stargazers_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stargazers_url') }})
    statuses_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses_url') }})
    subscribers_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribers_url') }})
    subscription_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription_url') }})
    tags_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags_url') }})
    teams_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams_url') }})
    trees_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trees_url') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    clone_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clone_url') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_branch') }})
    delete_branch_on_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete_branch_on_merge') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    forks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forks') }})
    forks_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forks_count') }})
    git_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_url') }})
    has_downloads: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_downloads') }})
    has_issues: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_issues') }})
    has_pages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_pages') }})
    has_projects: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_projects') }})
    has_wiki: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_wiki') }})
    homepage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepage') }})
    is_template: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_template') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    license: Optional[PackageMinimalRepositoryLicense] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    mirror_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mirror_url') }})
    network_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_count') }})
    open_issues: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues') }})
    open_issues_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues_count') }})
    permissions: Optional[PackageMinimalRepositoryPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    pushed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    ssh_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_url') }})
    stargazers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stargazers_count') }})
    subscribers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribers_count') }})
    svn_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('svn_url') }})
    temp_clone_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temp_clone_token') }})
    template_repository: Optional[PackageMinimalRepositoryRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_repository') }})
    topics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    visibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    watchers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchers') }})
    watchers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchers_count') }})
    
class PackageVisibilityEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"


@dataclass_json
@dataclass
class Package:
    r"""Package
    A software package
    """
    
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_type: PackagePackageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_type') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    version_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version_count') }})
    visibility: PackageVisibilityEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    owner: Optional[PackageSimpleUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    repository: Optional[PackageMinimalRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    
