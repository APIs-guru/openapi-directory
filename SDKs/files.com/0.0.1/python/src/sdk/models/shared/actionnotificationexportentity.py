from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActionNotificationExportEntity:
    end_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    export_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'export_version' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    query_folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_folder' }})
    query_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_message' }})
    query_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_path' }})
    query_request_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_request_method' }})
    query_request_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_request_url' }})
    query_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_status' }})
    query_success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_success' }})
    results_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results_url' }})
    start_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
