from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import asananamedresource
from . import asananamedresource
from . import usercompact


@dataclass_json
@dataclass
class EventResponseChange:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    added_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_value' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    new_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_value' }})
    removed_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removed_value' }})
    

@dataclass_json
@dataclass
class EventResponse:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    change: Optional[EventResponseChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'change' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parent: Optional[asananamedresource.AsanaNamedResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    resource: Optional[asananamedresource.AsanaNamedResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
