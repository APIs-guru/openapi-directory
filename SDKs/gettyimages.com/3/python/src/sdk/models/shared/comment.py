from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import collaborator
from . import commentpermissions


@dataclass_json
@dataclass
class Comment:
    created_by: Optional[collaborator.Collaborator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    permissions: Optional[commentpermissions.CommentPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
