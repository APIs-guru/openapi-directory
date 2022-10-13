from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import proposal


@dataclass_json
@dataclass
class CreateOrdersResponse:
    proposals: Optional[List[proposal.Proposal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposals' }})
    
