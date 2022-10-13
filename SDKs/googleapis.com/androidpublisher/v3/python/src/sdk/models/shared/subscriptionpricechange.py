from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price


@dataclass_json
@dataclass
class SubscriptionPriceChange:
    new_price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newPrice' }})
    state: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
