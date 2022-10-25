from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import link
from . import link
from . import link
from . import link
from . import link
from . import link
from . import link
from . import link
from . import simple_user
from . import author_association_enum
from . import simple_user
from . import team_simple


@dataclass_json
@dataclass
class PullRequestLinks:
    comments: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    commits: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commits' }})
    html: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    issue: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue' }})
    review_comment: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_comment' }})
    review_comments: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_comments' }})
    self: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    statuses: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statuses' }})
    

@dataclass_json
@dataclass
class PullRequestSimpleUser:
    avatar_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    followers_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers_url' }})
    following_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following_url' }})
    gists_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gists_url' }})
    gravatar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    organizations_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations_url' }})
    received_events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_events_url' }})
    repos_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    site_admin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_admin' }})
    starred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_at' }})
    starred_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_url' }})
    subscriptions_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions_url' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PullRequestBaseRepoLicenseSimple:
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    spdx_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdx_id' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PullRequestBaseRepoOwner:
    avatar_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    followers_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers_url' }})
    following_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following_url' }})
    gists_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gists_url' }})
    gravatar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    organizations_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations_url' }})
    received_events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_events_url' }})
    repos_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    site_admin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_admin' }})
    starred_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_url' }})
    subscriptions_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions_url' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PullRequestBaseRepoPermissions:
    admin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    pull: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull' }})
    push: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'push' }})
    

@dataclass_json
@dataclass
class PullRequestBaseRepo:
    allow_merge_commit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_merge_commit' }})
    allow_rebase_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_rebase_merge' }})
    allow_squash_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_squash_merge' }})
    anonymous_access_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anonymous_access_enabled' }})
    archive_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archive_url' }})
    archived: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    assignees_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignees_url' }})
    blobs_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobs_url' }})
    branches_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branches_url' }})
    clone_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clone_url' }})
    collaborators_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collaborators_url' }})
    comments_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments_url' }})
    commits_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commits_url' }})
    compare_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compare_url' }})
    contents_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents_url' }})
    contributors_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributors_url' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_branch: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_branch' }})
    deployments_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments_url' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    downloads_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloads_url' }})
    events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    fork: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fork' }})
    forks: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forks' }})
    forks_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forks_count' }})
    forks_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forks_url' }})
    full_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'full_name' }})
    git_commits_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_commits_url' }})
    git_refs_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_refs_url' }})
    git_tags_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_tags_url' }})
    git_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_url' }})
    has_downloads: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_downloads' }})
    has_issues: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_issues' }})
    has_pages: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_pages' }})
    has_projects: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_projects' }})
    has_wiki: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_wiki' }})
    homepage: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homepage' }})
    hooks_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hooks_url' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    issue_comment_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue_comment_url' }})
    issue_events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue_events_url' }})
    issues_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues_url' }})
    keys_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys_url' }})
    labels_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels_url' }})
    language: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    languages_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages_url' }})
    license: PullRequestBaseRepoLicenseSimple = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    master_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'master_branch' }})
    merges_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merges_url' }})
    milestones_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'milestones_url' }})
    mirror_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mirror_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    notifications_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications_url' }})
    open_issues: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open_issues' }})
    open_issues_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open_issues_count' }})
    owner: PullRequestBaseRepoOwner = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    permissions: Optional[PullRequestBaseRepoPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    private: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private' }})
    pulls_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pulls_url' }})
    pushed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    releases_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releases_url' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    ssh_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_url' }})
    stargazers_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stargazers_count' }})
    stargazers_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stargazers_url' }})
    statuses_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statuses_url' }})
    subscribers_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscribers_url' }})
    subscription_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription_url' }})
    svn_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'svn_url' }})
    tags_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags_url' }})
    teams_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams_url' }})
    topics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    trees_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trees_url' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    watchers: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchers' }})
    watchers_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchers_count' }})
    

@dataclass_json
@dataclass
class PullRequestBaseUser:
    avatar_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    followers_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers_url' }})
    following_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following_url' }})
    gists_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gists_url' }})
    gravatar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    organizations_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations_url' }})
    received_events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_events_url' }})
    repos_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    site_admin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_admin' }})
    starred_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_url' }})
    subscriptions_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions_url' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PullRequestBase:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    repo: PullRequestBaseRepo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    user: PullRequestBaseUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class PullRequestHeadRepoLicense:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    spdx_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdx_id' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PullRequestHeadRepoOwner:
    avatar_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    followers_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers_url' }})
    following_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following_url' }})
    gists_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gists_url' }})
    gravatar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    organizations_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations_url' }})
    received_events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_events_url' }})
    repos_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    site_admin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_admin' }})
    starred_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_url' }})
    subscriptions_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions_url' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PullRequestHeadRepoPermissions:
    admin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    pull: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull' }})
    push: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'push' }})
    

@dataclass_json
@dataclass
class PullRequestHeadRepo:
    allow_merge_commit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_merge_commit' }})
    allow_rebase_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_rebase_merge' }})
    allow_squash_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_squash_merge' }})
    anonymous_access_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anonymous_access_enabled' }})
    archive_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archive_url' }})
    archived: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    assignees_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignees_url' }})
    blobs_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobs_url' }})
    branches_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branches_url' }})
    clone_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clone_url' }})
    collaborators_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collaborators_url' }})
    comments_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments_url' }})
    commits_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commits_url' }})
    compare_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compare_url' }})
    contents_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents_url' }})
    contributors_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributors_url' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_branch: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_branch' }})
    deployments_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments_url' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    downloads_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloads_url' }})
    events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    fork: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fork' }})
    forks: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forks' }})
    forks_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forks_count' }})
    forks_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forks_url' }})
    full_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'full_name' }})
    git_commits_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_commits_url' }})
    git_refs_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_refs_url' }})
    git_tags_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_tags_url' }})
    git_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_url' }})
    has_downloads: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_downloads' }})
    has_issues: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_issues' }})
    has_pages: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_pages' }})
    has_projects: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_projects' }})
    has_wiki: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_wiki' }})
    homepage: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homepage' }})
    hooks_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hooks_url' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    issue_comment_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue_comment_url' }})
    issue_events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue_events_url' }})
    issues_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues_url' }})
    keys_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys_url' }})
    labels_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels_url' }})
    language: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    languages_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages_url' }})
    license: PullRequestHeadRepoLicense = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    master_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'master_branch' }})
    merges_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merges_url' }})
    milestones_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'milestones_url' }})
    mirror_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mirror_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    notifications_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications_url' }})
    open_issues: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open_issues' }})
    open_issues_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open_issues_count' }})
    owner: PullRequestHeadRepoOwner = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    permissions: Optional[PullRequestHeadRepoPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    private: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private' }})
    pulls_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pulls_url' }})
    pushed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    releases_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releases_url' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    ssh_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_url' }})
    stargazers_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stargazers_count' }})
    stargazers_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stargazers_url' }})
    statuses_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statuses_url' }})
    subscribers_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscribers_url' }})
    subscription_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription_url' }})
    svn_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'svn_url' }})
    tags_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags_url' }})
    teams_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams_url' }})
    topics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    trees_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trees_url' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    watchers: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchers' }})
    watchers_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchers_count' }})
    

@dataclass_json
@dataclass
class PullRequestHeadUser:
    avatar_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    followers_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers_url' }})
    following_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following_url' }})
    gists_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gists_url' }})
    gravatar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    organizations_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations_url' }})
    received_events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_events_url' }})
    repos_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    site_admin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_admin' }})
    starred_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_url' }})
    subscriptions_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions_url' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PullRequestHead:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    repo: PullRequestHeadRepo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    user: PullRequestHeadUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class PullRequestLabels:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PullRequestMilestoneSimpleUser:
    avatar_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    followers_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers_url' }})
    following_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following_url' }})
    gists_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gists_url' }})
    gravatar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    organizations_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations_url' }})
    received_events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_events_url' }})
    repos_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    site_admin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_admin' }})
    starred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_at' }})
    starred_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_url' }})
    subscriptions_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions_url' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class PullRequestMilestoneStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class PullRequestMilestone:
    closed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    closed_issues: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_issues' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: PullRequestMilestoneSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    due_on: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels_url' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    open_issues: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open_issues' }})
    state: PullRequestMilestoneStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class PullRequestStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class PullRequest:
    links: PullRequestLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    active_lock_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active_lock_reason' }})
    additions: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additions' }})
    assignee: PullRequestSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignee' }})
    assignees: Optional[List[simple_user.SimpleUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignees' }})
    author_association: author_association_enum.AuthorAssociationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_association' }})
    base: PullRequestBase = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    changed_files: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_files' }})
    closed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    comments: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    comments_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments_url' }})
    commits: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commits' }})
    commits_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commits_url' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deletions: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletions' }})
    diff_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diff_url' }})
    draft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'draft' }})
    head: PullRequestHead = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    issue_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue_url' }})
    labels: List[PullRequestLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    maintainer_can_modify: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintainer_can_modify' }})
    merge_commit_sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merge_commit_sha' }})
    mergeable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeable' }})
    mergeable_state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeable_state' }})
    merged: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merged' }})
    merged_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merged_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    merged_by: PullRequestSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merged_by' }})
    milestone: PullRequestMilestone = field(default=None, metadata={'dataclasses_json': { 'field_name': 'milestone' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    patch_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patch_url' }})
    rebaseable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rebaseable' }})
    requested_reviewers: Optional[List[simple_user.SimpleUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requested_reviewers' }})
    requested_teams: Optional[List[team_simple.TeamSimple]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requested_teams' }})
    review_comment_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_comment_url' }})
    review_comments: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_comments' }})
    review_comments_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_comments_url' }})
    state: PullRequestStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    statuses_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statuses_url' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: PullRequestSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
