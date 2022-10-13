from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rule


@dataclass_json
@dataclass
class CategoryProperties:
    category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CategoryName' }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rules: Optional[List[rule.Rule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    
