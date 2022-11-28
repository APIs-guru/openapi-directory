from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DiscountBenefit:
    r"""DiscountBenefit
    This container defines the promotional discount as either a monetary amount or a percentage of the sales price. Important!: You must populate one and only one of the fields in this container: amountOffItem amountOffOrder percentageOffItem percentageOffOrder Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification values to create different types of promotions.
    """
    
    amount_off_item: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountOffItem') }})
    amount_off_order: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountOffOrder') }})
    percentage_off_item: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentageOffItem') }})
    percentage_off_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentageOffOrder') }})
    
