from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import changesummary
from . import failurecode_enum
from . import changestatus_enum


@dataclass_json
@dataclass
class DescribeChangeSetResponse:
    change_set: Optional[List[changesummary.ChangeSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeSet' }})
    change_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeSetArn' }})
    change_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeSetId' }})
    change_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeSetName' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime' }})
    failure_code: Optional[failurecode_enum.FailureCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureCode' }})
    failure_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureDescription' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime' }})
    status: Optional[changestatus_enum.ChangeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
