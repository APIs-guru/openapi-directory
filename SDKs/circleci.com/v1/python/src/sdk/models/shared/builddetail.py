from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildDetail:
    r"""BuildDetail
    previous build
    """
    
    all_commit_details: Optional[List[CommitDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all_commit_details') }})
    compare: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compare') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job_name') }})
    node: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node') }})
    previous_successful_build: Optional[PreviousBuild] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_successful_build') }})
    retries: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    ssh_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_enabled') }})
    timedout: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timedout') }})
    usage_queued_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_queued_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
