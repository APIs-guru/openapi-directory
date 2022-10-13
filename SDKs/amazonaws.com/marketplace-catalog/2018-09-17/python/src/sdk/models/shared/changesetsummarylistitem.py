from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import failurecode_enum
from . import changestatus_enum


@dataclass_json
@dataclass
class ChangeSetSummaryListItem:
    change_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeSetArn' }})
    change_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeSetId' }})
    change_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeSetName' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime' }})
    entity_id_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityIdList' }})
    failure_code: Optional[failurecode_enum.FailureCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureCode' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime' }})
    status: Optional[changestatus_enum.ChangeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
