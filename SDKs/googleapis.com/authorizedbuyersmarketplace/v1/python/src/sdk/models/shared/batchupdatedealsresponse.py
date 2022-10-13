from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deal


@dataclass_json
@dataclass
class BatchUpdateDealsResponse:
    deals: Optional[List[deal.Deal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deals' }})
    
