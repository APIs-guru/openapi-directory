from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Job:
    r"""Job
    Job.
    """
    
    job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobID') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    creation_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime') }})
    end_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDateTime') }})
    initiated_by: Optional[InitiatedByEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiatedBy') }})
    participating_servers: Optional[List[ParticipatingServer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participatingServers') }})
    status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
