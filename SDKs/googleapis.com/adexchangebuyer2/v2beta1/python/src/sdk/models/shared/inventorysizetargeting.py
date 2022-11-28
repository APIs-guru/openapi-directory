from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InventorySizeTargeting:
    r"""InventorySizeTargeting
    Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager.
    """
    
    excluded_inventory_sizes: Optional[List[AdSize]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedInventorySizes') }})
    targeted_inventory_sizes: Optional[List[AdSize]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetedInventorySizes') }})
    
