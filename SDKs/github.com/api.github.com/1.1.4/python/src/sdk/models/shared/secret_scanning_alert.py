from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import simple_user
from . import secret_scanning_alert_state_enum


@dataclass_json
@dataclass
class SecretScanningAlert:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    resolved_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolved_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resolved_by: Optional[simple_user.SimpleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolved_by' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    secret_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret_type' }})
    state: Optional[secret_scanning_alert_state_enum.SecretScanningAlertStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
