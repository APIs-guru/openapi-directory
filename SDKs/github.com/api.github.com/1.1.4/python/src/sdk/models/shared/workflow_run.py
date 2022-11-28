from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowRun:
    r"""WorkflowRun
    An invocation of a workflow
    """
    
    artifacts_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts_url') }})
    cancel_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_url') }})
    check_suite_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_suite_url') }})
    conclusion: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conclusion') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    head_branch: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_branch') }})
    head_commit: SimpleCommit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_commit') }})
    head_repository: MinimalRepository = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_repository') }})
    head_sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_sha') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    jobs_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs_url') }})
    logs_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logs_url') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    pull_requests: List[PullRequestMinimal] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_requests') }})
    repository: MinimalRepository = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    rerun_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rerun_url') }})
    run_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_number') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    workflow_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow_id') }})
    workflow_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow_url') }})
    head_repository_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_repository_id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
