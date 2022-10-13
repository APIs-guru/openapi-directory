from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import patch


@dataclass_json
@dataclass
class DescribeAvailablePatchesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    patches: Optional[List[patch.Patch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Patches' }})
    
