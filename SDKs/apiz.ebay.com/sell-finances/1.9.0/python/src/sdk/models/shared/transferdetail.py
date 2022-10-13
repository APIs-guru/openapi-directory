from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import balanceadjustment
from . import charge
from . import amount


@dataclass_json
@dataclass
class TransferDetail:
    balance_adjustment: Optional[balanceadjustment.BalanceAdjustment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balanceAdjustment' }})
    charges: Optional[List[charge.Charge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charges' }})
    total_charge_net_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalChargeNetAmount' }})
    
