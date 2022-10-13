from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateAdsByInventoryReferenceRequest:
    bid_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidPercentage' }})
    inventory_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryReferenceId' }})
    inventory_reference_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryReferenceType' }})
    
