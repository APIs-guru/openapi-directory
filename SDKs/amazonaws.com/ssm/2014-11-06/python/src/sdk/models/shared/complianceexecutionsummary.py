from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ComplianceExecutionSummary:
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionId' }})
    execution_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionType' }})
    
