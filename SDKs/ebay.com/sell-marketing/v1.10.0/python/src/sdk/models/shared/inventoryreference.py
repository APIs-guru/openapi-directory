from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InventoryReference:
    r"""InventoryReference
    This complex type is used to identify an item that is managed by the Inventory API. The type defines the fields contained in an inventory reference ID.
    """
    
    inventory_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryReferenceId') }})
    inventory_reference_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryReferenceType') }})
    
