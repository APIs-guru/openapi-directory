from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransferDetail:
    r"""TransferDetail
    This type is used by the transferDetail container, which provides more details about the transfer and the charge(s) associated with the transfer.
    """
    
    balance_adjustment: Optional[BalanceAdjustment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceAdjustment') }})
    charges: Optional[List[Charge]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charges') }})
    total_charge_net_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalChargeNetAmount') }})
    
