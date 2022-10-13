from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectionstate_enum


@dataclass_json
@dataclass
class WorkspaceConnectionStatus:
    connection_state: Optional[connectionstate_enum.ConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionState' }})
    connection_state_check_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionStateCheckTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_known_user_connection_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastKnownUserConnectionTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workspace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceId' }})
    
