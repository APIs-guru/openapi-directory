from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import opsentity


@dataclass_json
@dataclass
class GetOpsSummaryResult:
    entities: Optional[List[opsentity.OpsEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
