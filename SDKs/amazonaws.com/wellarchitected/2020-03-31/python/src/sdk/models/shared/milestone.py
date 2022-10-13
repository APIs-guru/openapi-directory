from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import workload


@dataclass_json
@dataclass
class Milestone:
    milestone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MilestoneName' }})
    milestone_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MilestoneNumber' }})
    recorded_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workload: Optional[workload.Workload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Workload' }})
    
