from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PullRequestLinks:
    comments: Link = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    commits: Link = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commits') }})
    html: Link = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    issue: Link = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue') }})
    review_comment: Link = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_comment') }})
    review_comments: Link = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_comments') }})
    self: Link = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    statuses: Link = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    

@dataclass_json
@dataclass
class PullRequestSimpleUser:
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
class PullRequestBaseRepoLicenseSimple:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    spdx_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdx_id') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    

@dataclass_json
@dataclass
class PullRequestBaseRepoOwner:
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
    

@dataclass_json
@dataclass
class PullRequestBaseRepoPermissions:
    admin: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    pull: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull') }})
    push: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    

@dataclass_json
@dataclass
class PullRequestBaseRepo:
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
    license: PullRequestBaseRepoLicenseSimple = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    merges_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merges_url') }})
    milestones_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestones_url') }})
    mirror_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mirror_url') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    notifications_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications_url') }})
    open_issues: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues') }})
    open_issues_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues_count') }})
    owner: PullRequestBaseRepoOwner = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
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
    anonymous_access_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymous_access_enabled') }})
    master_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('master_branch') }})
    permissions: Optional[PullRequestBaseRepoPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    topics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    

@dataclass_json
@dataclass
class PullRequestBaseUser:
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
    

@dataclass_json
@dataclass
class PullRequestBase:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    ref: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    repo: PullRequestBaseRepo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    user: PullRequestBaseUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclass
class PullRequestHeadRepoLicense:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    spdx_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdx_id') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PullRequestHeadRepoOwner:
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
    

@dataclass_json
@dataclass
class PullRequestHeadRepoPermissions:
    admin: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    pull: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull') }})
    push: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }})
    

@dataclass_json
@dataclass
class PullRequestHeadRepo:
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
    license: PullRequestHeadRepoLicense = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    merges_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merges_url') }})
    milestones_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestones_url') }})
    mirror_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mirror_url') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    notifications_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications_url') }})
    open_issues: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues') }})
    open_issues_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues_count') }})
    owner: PullRequestHeadRepoOwner = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
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
    anonymous_access_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymous_access_enabled') }})
    master_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('master_branch') }})
    permissions: Optional[PullRequestHeadRepoPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    topics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    

@dataclass_json
@dataclass
class PullRequestHeadUser:
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
    

@dataclass_json
@dataclass
class PullRequestHead:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    ref: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    repo: PullRequestHeadRepo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    user: PullRequestHeadUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclass
class PullRequestLabels:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PullRequestMilestoneSimpleUser:
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
    
class PullRequestMilestoneStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class PullRequestMilestone:
    closed_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    closed_issues: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_issues') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: PullRequestMilestoneSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    due_on: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels_url') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    open_issues: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues') }})
    state: PullRequestMilestoneStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class PullRequestStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class PullRequest:
    r"""PullRequest
    Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
    """
    
    links: PullRequestLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    additions: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('additions') }})
    assignee: PullRequestSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    author_association: AuthorAssociationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_association') }})
    base: PullRequestBase = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    changed_files: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_files') }})
    closed_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    comments: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    comments_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments_url') }})
    commits: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commits') }})
    commits_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commits_url') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deletions: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletions') }})
    diff_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diff_url') }})
    head: PullRequestHead = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    issue_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_url') }})
    labels: List[PullRequestLabels] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    locked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    maintainer_can_modify: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintainer_can_modify') }})
    merge_commit_sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merge_commit_sha') }})
    mergeable: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeable') }})
    mergeable_state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeable_state') }})
    merged: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merged') }})
    merged_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merged_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    merged_by: PullRequestSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merged_by') }})
    milestone: PullRequestMilestone = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestone') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    patch_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patch_url') }})
    review_comment_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_comment_url') }})
    review_comments: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_comments') }})
    review_comments_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_comments_url') }})
    state: PullRequestStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    statuses_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses_url') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user: PullRequestSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    active_lock_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_lock_reason') }})
    assignees: Optional[List[SimpleUser]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignees') }})
    draft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft') }})
    rebaseable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebaseable') }})
    requested_reviewers: Optional[List[SimpleUser]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_reviewers') }})
    requested_teams: Optional[List[TeamSimple]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_teams') }})
    
