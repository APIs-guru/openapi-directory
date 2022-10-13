from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SyncJobEntity:
    folder_behavior_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folder_behavior_id' }})
    queued_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queued_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    regional_worker_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regional_worker_status' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    
