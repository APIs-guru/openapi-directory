from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChangeSetSummaryListItem:
    r"""ChangeSetSummaryListItem
    A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called.
    """
    
    change_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeSetArn') }})
    change_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeSetId') }})
    change_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeSetName') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime') }})
    entity_id_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityIdList') }})
    failure_code: Optional[FailureCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureCode') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime') }})
    status: Optional[ChangeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
