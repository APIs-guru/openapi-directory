from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventoryitem
from . import inventoryitem
from . import selectionrule


@dataclass_json
@dataclass
class RuleCriteria:
    exclude_inventory_items: Optional[List[inventoryitem.InventoryItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeInventoryItems' }})
    exclude_listing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeListingIds' }})
    markup_inventory_items: Optional[List[inventoryitem.InventoryItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markupInventoryItems' }})
    markup_listing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markupListingIds' }})
    selection_rules: Optional[List[selectionrule.SelectionRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionRules' }})
    
