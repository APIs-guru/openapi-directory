from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""CheckSuite
    A suite of checks performed on the code of a given code change
    """
    
    after: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('after') }})
    app: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app') }})
    before: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('before') }})
    check_runs_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_runs_url') }})
    conclusion: CheckSuiteConclusionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conclusion') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    head_branch: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_branch') }})
    head_commit: SimpleCommit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_commit') }})
    head_sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_sha') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latest_check_runs_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_check_runs_count') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    pull_requests: List[PullRequestMinimal] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_requests') }})
    repository: MinimalRepository = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    status: CheckSuiteStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
