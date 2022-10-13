from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money
from . import money


@dataclass_json
@dataclass
class OtherRegionsBasePlanConfig:
    eur_price: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eurPrice' }})
    new_subscriber_availability: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newSubscriberAvailability' }})
    usd_price: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usdPrice' }})
    
