from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount
from . import amount


@dataclass_json
@dataclass
class MarketingPrice:
    discount_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discountAmount' }})
    discount_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discountPercentage' }})
    original_price: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalPrice' }})
    price_treatment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceTreatment' }})
    
