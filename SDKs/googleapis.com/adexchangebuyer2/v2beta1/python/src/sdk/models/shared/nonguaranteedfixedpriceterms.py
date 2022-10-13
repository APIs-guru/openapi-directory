from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import priceperbuyer


@dataclass_json
@dataclass
class NonGuaranteedFixedPriceTerms:
    fixed_prices: Optional[List[priceperbuyer.PricePerBuyer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedPrices' }})
    
