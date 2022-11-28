from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DiscountSpecification:
    r"""DiscountSpecification
    This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met. Note: When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the discountSpecification container: minAmount minQuantity forEachQuantity forEachAmount Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification to create different types of promotions.
    """
    
    for_each_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forEachAmount') }})
    for_each_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forEachQuantity') }})
    min_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minAmount') }})
    min_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minQuantity') }})
    number_of_discounted_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfDiscountedItems') }})
    
