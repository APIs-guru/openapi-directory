from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventoryitem
from . import rulecriteria


@dataclass_json
@dataclass
class InventoryCriterion:
    inventory_criterion_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryCriterionType' }})
    inventory_items: Optional[List[inventoryitem.InventoryItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryItems' }})
    listing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingIds' }})
    rule_criteria: Optional[rulecriteria.RuleCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleCriteria' }})
    
