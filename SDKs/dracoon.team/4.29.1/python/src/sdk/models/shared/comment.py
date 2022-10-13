from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from . import userinfo
from . import userinfo


@dataclass_json
@dataclass
class Comment:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: userinfo.UserInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_changed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isChanged' }})
    is_deleted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDeleted' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: userinfo.UserInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    
