from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RuleCriteria:
    r"""RuleCriteria
    This type defines the fields for a set of inventory selection rules. Required: When inventoryCriterionType is set to INVENTORY_BY_RULE or INVENTORY_ANY.
    """
    
    exclude_inventory_items: Optional[List[InventoryItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeInventoryItems') }})
    exclude_listing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeListingIds') }})
    markup_inventory_items: Optional[List[InventoryItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markupInventoryItems') }})
    markup_listing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markupListingIds') }})
    selection_rules: Optional[List[SelectionRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionRules') }})
    
