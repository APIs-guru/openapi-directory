from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import search_result_text_matches


@dataclass_json
@dataclass
class RepoSearchResultItemLicenseLicenseSimple:
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    spdx_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdx_id' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class RepoSearchResultItemOwnerSimpleUser:
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
class RepoSearchResultItemPermissions:
    admin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    pull: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull' }})
    push: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'push' }})
    

@dataclass_json
@dataclass
class RepoSearchResultItem:
    allow_merge_commit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_merge_commit' }})
    allow_rebase_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_rebase_merge' }})
    allow_squash_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_squash_merge' }})
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
    delete_branch_on_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete_branch_on_merge' }})
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
    license: RepoSearchResultItemLicenseLicenseSimple = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    master_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'master_branch' }})
    merges_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merges_url' }})
    milestones_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'milestones_url' }})
    mirror_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mirror_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    notifications_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications_url' }})
    open_issues: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open_issues' }})
    open_issues_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open_issues_count' }})
    owner: RepoSearchResultItemOwnerSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    permissions: Optional[RepoSearchResultItemPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    private: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private' }})
    pulls_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pulls_url' }})
    pushed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    releases_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releases_url' }})
    score: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
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
    temp_clone_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'temp_clone_token' }})
    text_matches: Optional[List[search_result_text_matches.SearchResultTextMatches]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text_matches' }})
    topics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    trees_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trees_url' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    watchers: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchers' }})
    watchers_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchers_count' }})
    
