from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import executionstatus_enum


@dataclass_json
@dataclass
class ExecutionListItem:
    execution_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionArn' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state_machine_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMachineArn' }})
    status: executionstatus_enum.ExecutionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stop_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
