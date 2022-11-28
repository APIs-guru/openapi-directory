from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SelectedInventoryDiscount:
    r"""SelectedInventoryDiscount
    This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied.
    """
    
    discount_benefit: Optional[DiscountBenefit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountBenefit') }})
    discount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountId') }})
    inventory_criterion: Optional[InventoryCriterion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryCriterion') }})
    rule_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleOrder') }})
    
