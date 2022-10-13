from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dealer


@dataclass_json
@dataclass
class DealersResponse:
    dealers: Optional[List[dealer.Dealer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealers' }})
    num_found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_found' }})
    
