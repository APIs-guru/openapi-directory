from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeChangeSetResponse:
    change_set: Optional[List[ChangeSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeSet') }})
    change_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeSetArn') }})
    change_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeSetId') }})
    change_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeSetName') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime') }})
    failure_code: Optional[FailureCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureCode') }})
    failure_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureDescription') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime') }})
    status: Optional[ChangeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
