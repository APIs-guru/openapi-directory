from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventPayloadPages:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    page_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_name') }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class EventPayload:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    comment: Optional[IssueComment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    issue: Optional[IssueSimple] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue') }})
    pages: Optional[List[EventPayloadPages]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclass
class EventRepo:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class Event:
    r"""Event
    Event
    """
    
    actor: Actor = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    payload: EventPayload = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    public: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    repo: EventRepo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    org: Optional[Actor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org') }})
    
