from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount
from . import amount
from . import amount
from . import amount


@dataclass_json
@dataclass
class SellerFundsSummaryResponse:
    available_funds: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableFunds' }})
    funds_on_hold: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundsOnHold' }})
    processing_funds: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingFunds' }})
    total_funds: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFunds' }})
    
