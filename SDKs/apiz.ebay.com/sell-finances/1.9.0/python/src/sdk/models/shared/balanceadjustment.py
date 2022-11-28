from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BalanceAdjustment:
    r"""BalanceAdjustment
    This type is used by the balanceAdjustment container, which shows the seller payout balance that will be applied toward the charges outlined in the charges array.
    """
    
    adjustment_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustmentAmount') }})
    adjustment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustmentType') }})
    
