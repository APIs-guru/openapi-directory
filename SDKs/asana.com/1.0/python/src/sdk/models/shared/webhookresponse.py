from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import asananamedresource


@dataclass_json
@dataclass
class WebhookResponseFilters:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    resource_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_subtype' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    

@dataclass_json
@dataclass
class WebhookResponse:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    filters: Optional[List[WebhookResponseFilters]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    last_failure_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_failure_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_failure_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_failure_content' }})
    last_success_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_success_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource: Optional[asananamedresource.AsanaNamedResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
