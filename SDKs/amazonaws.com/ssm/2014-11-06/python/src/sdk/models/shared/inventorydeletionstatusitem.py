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
class InventoryDeletionStatusItem:
    r"""InventoryDeletionStatusItem
    Status information returned by the <code>DeleteInventory</code> operation.
    """
    
    deletion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletionId') }})
    deletion_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletionStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deletion_summary: Optional[InventoryDeletionSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletionSummary') }})
    last_status: Optional[InventoryDeletionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastStatus') }})
    last_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastStatusMessage') }})
    last_status_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastStatusUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeName') }})
    
