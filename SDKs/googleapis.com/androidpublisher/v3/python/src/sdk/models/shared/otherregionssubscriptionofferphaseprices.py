from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money
from . import money


@dataclass_json
@dataclass
class OtherRegionsSubscriptionOfferPhasePrices:
    eur_price: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eurPrice' }})
    usd_price: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usdPrice' }})
    
