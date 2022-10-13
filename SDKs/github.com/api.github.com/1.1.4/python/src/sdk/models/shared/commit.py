from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import verification


@dataclass_json
@dataclass
class CommitAuthorSimpleUser:
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
class CommitCommitAuthorGitUser:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class CommitCommitCommitterGitUser:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class CommitCommitTree:
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class CommitCommit:
    author: CommitCommitAuthorGitUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    comment_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment_count' }})
    committer: CommitCommitCommitterGitUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    tree: CommitCommitTree = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tree' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    verification: Optional[verification.Verification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification' }})
    

@dataclass_json
@dataclass
class CommitCommitterSimpleUser:
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
class CommitFiles:
    additions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additions' }})
    blob_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blob_url' }})
    changes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changes' }})
    contents_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents_url' }})
    deletions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletions' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    patch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patch' }})
    previous_filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_filename' }})
    raw_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw_url' }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class CommitParents:
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class CommitStats:
    additions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additions' }})
    deletions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletions' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class Commit:
    author: CommitAuthorSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    comments_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments_url' }})
    commit: CommitCommit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit' }})
    committer: CommitCommitterSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer' }})
    files: Optional[List[CommitFiles]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    parents: List[CommitParents] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parents' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    stats: Optional[CommitStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
