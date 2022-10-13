from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BandwidthSnapshotEntity:
    bytes_received: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bytes_received' }})
    bytes_sent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bytes_sent' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    logged_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logged_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requests_get: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests_get' }})
    requests_other: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests_other' }})
    requests_put: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests_put' }})
    sync_bytes_received: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sync_bytes_received' }})
    sync_bytes_sent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sync_bytes_sent' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
