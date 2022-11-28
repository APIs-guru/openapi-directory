from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NonGuaranteedFixedPriceTerms:
    r"""NonGuaranteedFixedPriceTerms
    Terms for Preferred Deals.
    """
    
    fixed_prices: Optional[List[PricePerBuyer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedPrices') }})
    
