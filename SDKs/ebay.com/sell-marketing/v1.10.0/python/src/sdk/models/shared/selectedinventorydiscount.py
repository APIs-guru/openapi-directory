from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import discountbenefit
from . import inventorycriterion


@dataclass_json
@dataclass
class SelectedInventoryDiscount:
    discount_benefit: Optional[discountbenefit.DiscountBenefit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discountBenefit' }})
    discount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discountId' }})
    inventory_criterion: Optional[inventorycriterion.InventoryCriterion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryCriterion' }})
    rule_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleOrder' }})
    
