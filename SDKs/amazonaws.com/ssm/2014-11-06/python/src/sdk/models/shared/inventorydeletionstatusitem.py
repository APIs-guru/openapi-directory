from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inventorydeletionsummary
from . import inventorydeletionstatus_enum


@dataclass_json
@dataclass
class InventoryDeletionStatusItem:
    deletion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletionId' }})
    deletion_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletionStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deletion_summary: Optional[inventorydeletionsummary.InventoryDeletionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletionSummary' }})
    last_status: Optional[inventorydeletionstatus_enum.InventoryDeletionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastStatus' }})
    last_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastStatusMessage' }})
    last_status_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastStatusUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeName' }})
    
