from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import simple_user
from . import author_association_enum


@dataclass_json
@dataclass
class IssueEventForIssue:
    actor: Optional[simple_user.SimpleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor' }})
    author_association: Optional[author_association_enum.AuthorAssociationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_association' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    body_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_html' }})
    body_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_text' }})
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_id' }})
    commit_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_url' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    issue_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue_url' }})
    lock_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lock_reason' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    pull_request_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request_url' }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    submitted_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submitted_at' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
