from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import canary


@dataclass_json
@dataclass
class DescribeCanariesResponse:
    canaries: Optional[List[canary.Canary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Canaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
