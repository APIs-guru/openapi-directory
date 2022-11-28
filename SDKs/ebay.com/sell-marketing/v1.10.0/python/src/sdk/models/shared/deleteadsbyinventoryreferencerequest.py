from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteAdsByInventoryReferenceRequest:
    r"""DeleteAdsByInventoryReferenceRequest
    This type defines the fields needed to delete an ad by its inventory reference ID. You must always supply both inventory_reference_id and inventory_reference_type.
    """
    
    inventory_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryReferenceId') }})
    inventory_reference_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryReferenceType') }})
    
