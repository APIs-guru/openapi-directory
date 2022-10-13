from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IntroductoryPriceInfo:
    introductory_price_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'introductoryPriceAmountMicros' }})
    introductory_price_currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'introductoryPriceCurrencyCode' }})
    introductory_price_cycles: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'introductoryPriceCycles' }})
    introductory_price_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'introductoryPricePeriod' }})
    
