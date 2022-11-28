from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListComplianceItemsRequest:
    filters: Optional[List[ComplianceStringFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIds') }})
    resource_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTypes') }})
    
