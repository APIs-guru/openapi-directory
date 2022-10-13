from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stack


@dataclass_json
@dataclass
class DescribeStacksResult:
    stacks: Optional[List[stack.Stack]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Stacks' }})
    
