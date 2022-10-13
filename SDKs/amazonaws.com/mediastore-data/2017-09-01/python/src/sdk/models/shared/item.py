from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import itemtype_enum


@dataclass_json
@dataclass
class Item:
    content_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentLength' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentType' }})
    e_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ETag' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    type: Optional[itemtype_enum.ItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
