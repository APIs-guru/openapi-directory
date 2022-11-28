from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppliedPromotion:
    r"""AppliedPromotion
    This type contains information about a sales promotion that is applied to a line item.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    discount_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountAmount') }})
    promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionId') }})
    
