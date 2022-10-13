from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import deployment_simple


@dataclass_json
@dataclass
class CheckRunCheckSuite:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class CheckRunConclusionEnum(str, Enum):
    SUCCESS = "success"
    FAILURE = "failure"
    NEUTRAL = "neutral"
    CANCELLED = "cancelled"
    SKIPPED = "skipped"
    TIMED_OUT = "timed_out"
    ACTION_REQUIRED = "action_required"


@dataclass_json
@dataclass
class CheckRunOutput:
    annotations_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations_count' }})
    annotations_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations_url' }})
    summary: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class CheckRunStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


@dataclass_json
@dataclass
class CheckRun:
    app: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app' }})
    check_suite: CheckRunCheckSuite = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_suite' }})
    completed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    conclusion: CheckRunConclusionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conclusion' }})
    deployment: Optional[deployment_simple.DeploymentSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment' }})
    details_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details_url' }})
    external_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_id' }})
    head_sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_sha' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    output: CheckRunOutput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output' }})
    pull_requests: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_requests' }})
    started_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: CheckRunStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
