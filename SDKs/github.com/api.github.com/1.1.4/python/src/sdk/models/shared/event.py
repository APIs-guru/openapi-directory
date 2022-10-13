from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actor
from . import actor
from . import issue_comment
from . import issue_simple


@dataclass_json
@dataclass
class EventPayloadPages:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    page_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_name' }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class EventPayload:
    action: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    comment: Optional[issue_comment.IssueComment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    issue: Optional[issue_simple.IssueSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue' }})
    pages: Optional[List[EventPayloadPages]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class EventRepo:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class Event:
    actor: actor.Actor = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    org: Optional[actor.Actor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org' }})
    payload: EventPayload = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    public: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    repo: EventRepo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
