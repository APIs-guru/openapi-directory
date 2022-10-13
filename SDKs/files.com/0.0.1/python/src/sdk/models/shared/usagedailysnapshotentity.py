from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UsageDailySnapshotEntity:
    current_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_storage' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    usage_by_top_level_dir: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_by_top_level_dir' }})
    
