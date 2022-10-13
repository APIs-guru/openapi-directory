from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PublicUploadedFileData:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hash' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
