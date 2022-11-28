from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InventoryCriterion:
    r"""InventoryCriterion
    This type defines either the selections rules or the list of listing IDs for the promotion. The &quot;listing IDs&quot; are are either the seller's item IDs or the eBay listing IDs.
    """
    
    inventory_criterion_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryCriterionType') }})
    inventory_items: Optional[List[InventoryItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryItems') }})
    listing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingIds') }})
    rule_criteria: Optional[RuleCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleCriteria') }})
    
