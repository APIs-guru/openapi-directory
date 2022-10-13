from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import simple_user


@dataclass_json
@dataclass
class GistSimpleFiles:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    raw_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw_url' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truncated' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GistSimpleForkOfFiles:
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    raw_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw_url' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GistSimpleForkOfOwnerSimpleUser:
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
class GistSimpleForkOfUserSimpleUser:
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
class GistSimpleForkOfGist:
    comments: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    comments_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments_url' }})
    commits_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commits_url' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    files: dict[str, GistSimpleForkOfFiles] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    forks: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forks' }})
    forks_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forks_url' }})
    git_pull_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_pull_url' }})
    git_push_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_push_url' }})
    history: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'history' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    owner: Optional[GistSimpleForkOfOwnerSimpleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    public: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truncated' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: GistSimpleForkOfUserSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class GistSimple:
    comments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    comments_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments_url' }})
    commits_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commits_url' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    files: Optional[dict[str, GistSimpleFiles]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    fork_of: Optional[GistSimpleForkOfGist] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fork_of' }})
    forks: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forks' }})
    forks_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forks_url' }})
    git_pull_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_pull_url' }})
    git_push_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_push_url' }})
    history: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'history' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    owner: Optional[simple_user.SimpleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truncated' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
