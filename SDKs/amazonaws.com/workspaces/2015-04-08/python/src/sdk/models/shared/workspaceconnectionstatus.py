from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkspaceConnectionStatus:
    r"""WorkspaceConnectionStatus
    Describes the connection status of a WorkSpace.
    """
    
    connection_state: Optional[ConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionState') }})
    connection_state_check_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionStateCheckTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_known_user_connection_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastKnownUserConnectionTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workspace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceId') }})
    
