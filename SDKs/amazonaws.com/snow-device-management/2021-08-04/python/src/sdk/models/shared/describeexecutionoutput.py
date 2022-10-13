from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import executionstate_enum


@dataclass_json
@dataclass
class DescribeExecutionOutput:
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionId' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    managed_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedDeviceId' }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[executionstate_enum.ExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    
