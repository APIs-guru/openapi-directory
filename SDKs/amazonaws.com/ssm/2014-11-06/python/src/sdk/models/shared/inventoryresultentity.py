from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InventoryResultEntity:
    r"""InventoryResultEntity
    Inventory query results.
    """
    
    data: Optional[dict[str, InventoryResultItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    
