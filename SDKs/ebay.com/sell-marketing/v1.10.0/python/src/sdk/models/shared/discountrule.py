from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import discountbenefit
from . import discountspecification
from . import amount


@dataclass_json
@dataclass
class DiscountRule:
    discount_benefit: Optional[discountbenefit.DiscountBenefit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discountBenefit' }})
    discount_specification: Optional[discountspecification.DiscountSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discountSpecification' }})
    max_discount_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDiscountAmount' }})
    rule_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleOrder' }})
    
