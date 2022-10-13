from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListAvailableManagementCidrRangesResult:
    management_cidr_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManagementCidrRanges' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
