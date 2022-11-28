from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InventoryFilter:
    r"""InventoryFilter
    One or more filters. Use a filter to return a more specific list of results.
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    type: Optional[InventoryQueryOperatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
