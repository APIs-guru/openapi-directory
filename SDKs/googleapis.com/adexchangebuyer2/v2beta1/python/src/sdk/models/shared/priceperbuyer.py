from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buyer
from . import price


@dataclass_json
@dataclass
class PricePerBuyer:
    advertiser_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserIds' }})
    buyer: Optional[buyer.Buyer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer' }})
    price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
