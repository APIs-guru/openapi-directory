from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAssociationExecutionTargetsRequest:
    association_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociationId') }})
    execution_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionId') }})
    filters: Optional[List[AssociationExecutionTargetsFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
