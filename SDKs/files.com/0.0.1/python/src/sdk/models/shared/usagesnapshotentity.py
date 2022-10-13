from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UsageSnapshotEntity:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_storage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_storage' }})
    deleted_files_counted_in_minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted_files_counted_in_minimum' }})
    deleted_files_storage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted_files_storage' }})
    end_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    high_water_storage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'high_water_storage' }})
    high_water_user_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'high_water_user_count' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    root_storage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root_storage' }})
    start_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    total_downloads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_downloads' }})
    total_uploads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_uploads' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    usage_by_top_level_dir: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_by_top_level_dir' }})
    
