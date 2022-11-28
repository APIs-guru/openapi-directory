from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DiscountRule:
    r"""DiscountRule
    This complex type defines a promotion as being either a monetary amount or a percentage of a sales price that's subtracted from the price of an item or order. Set the amount of the discount and the rules that govern when the discount triggers using the discountBenefit and discountSpecification fields. Note: In volume pricing promotions, you must configure at least two discountRule containers and at most four.
    """
    
    discount_benefit: Optional[DiscountBenefit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountBenefit') }})
    discount_specification: Optional[DiscountSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountSpecification') }})
    max_discount_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDiscountAmount') }})
    rule_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleOrder') }})
    
