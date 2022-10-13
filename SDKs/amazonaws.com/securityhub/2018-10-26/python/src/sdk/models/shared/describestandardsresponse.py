from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import standard


@dataclass_json
@dataclass
class DescribeStandardsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    standards: Optional[List[standard.Standard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Standards' }})
    
