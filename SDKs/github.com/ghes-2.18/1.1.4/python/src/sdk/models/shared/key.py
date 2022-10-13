from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Key:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    read_only: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read_only' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    verified: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    
