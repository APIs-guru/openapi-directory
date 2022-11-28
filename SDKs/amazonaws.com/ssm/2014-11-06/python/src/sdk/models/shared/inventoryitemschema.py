from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InventoryItemSchema:
    r"""InventoryItemSchema
    The inventory item schema definition. Users can use this to compose inventory query filters.
    """
    
    attributes: List[InventoryItemAttribute] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    type_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeName') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
