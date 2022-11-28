from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InventoryGroup:
    r"""InventoryGroup
    A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.
    """
    
    filters: List[InventoryFilter] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
