from dataclasses import dataclass, field
from typing import Optional
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
class GistSimple:
    comments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    comments_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments_url' }})
    commits_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commits_url' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    files: Optional[dict[str, GistSimpleFiles]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    forks_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forks_url' }})
    git_pull_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_pull_url' }})
    git_push_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_push_url' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    owner: Optional[simple_user.SimpleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truncated' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
