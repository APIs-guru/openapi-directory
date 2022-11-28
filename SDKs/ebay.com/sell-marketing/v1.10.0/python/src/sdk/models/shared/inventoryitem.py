from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InventoryItem:
    r"""InventoryItem
    This type defines the fields for the seller inventory reference IDs (also known as an &quot;SKU&quot; or &quot;custom label&quot;).
    """
    
    inventory_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryReferenceId') }})
    
