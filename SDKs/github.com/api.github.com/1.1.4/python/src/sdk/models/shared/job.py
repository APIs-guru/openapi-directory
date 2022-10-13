from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class JobStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"

class JobStepsStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


@dataclass_json
@dataclass
class JobSteps:
    completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    conclusion: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conclusion' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: JobStepsStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class Job:
    check_run_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_run_url' }})
    completed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    conclusion: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conclusion' }})
    head_sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_sha' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    run_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_id' }})
    run_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_url' }})
    started_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: JobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    steps: Optional[List[JobSteps]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
