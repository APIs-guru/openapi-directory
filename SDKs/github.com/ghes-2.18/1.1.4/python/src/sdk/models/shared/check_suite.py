from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List
from dataclasses_json import dataclass_json
from . import simple_commit
from . import pull_request_minimal
from . import minimal_repository

class CheckSuiteConclusionEnum(str, Enum):
    SUCCESS = "success"
    FAILURE = "failure"
    NEUTRAL = "neutral"
    CANCELLED = "cancelled"
    SKIPPED = "skipped"
    TIMED_OUT = "timed_out"
    ACTION_REQUIRED = "action_required"

class CheckSuiteStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


@dataclass_json
@dataclass
class CheckSuite:
    after: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'after' }})
    app: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app' }})
    before: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'before' }})
    check_runs_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_runs_url' }})
    conclusion: CheckSuiteConclusionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conclusion' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    head_branch: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_branch' }})
    head_commit: simple_commit.SimpleCommit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_commit' }})
    head_sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_sha' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latest_check_runs_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_check_runs_count' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    pull_requests: List[pull_request_minimal.PullRequestMinimal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_requests' }})
    repository: minimal_repository.MinimalRepository = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    status: CheckSuiteStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
