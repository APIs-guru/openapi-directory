from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAccountAssignmentDeletionStatusRequest:
    instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceArn') }})
    filter: Optional[OperationStatusFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
