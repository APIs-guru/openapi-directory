from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adsize
from . import adsize


@dataclass_json
@dataclass
class InventorySizeTargeting:
    excluded_inventory_sizes: Optional[List[adsize.AdSize]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedInventorySizes' }})
    targeted_inventory_sizes: Optional[List[adsize.AdSize]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetedInventorySizes' }})
    
