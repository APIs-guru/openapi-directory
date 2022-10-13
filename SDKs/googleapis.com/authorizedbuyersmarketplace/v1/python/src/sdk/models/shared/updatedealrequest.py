from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deal


@dataclass_json
@dataclass
class UpdateDealRequest:
    deal: Optional[deal.Deal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deal' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
