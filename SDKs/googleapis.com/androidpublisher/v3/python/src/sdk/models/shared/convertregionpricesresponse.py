from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConvertRegionPricesResponse:
    r"""ConvertRegionPricesResponse
    Response message for ConvertRegionPrices.
    """
    
    converted_other_regions_price: Optional[ConvertedOtherRegionsPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertedOtherRegionsPrice') }})
    converted_region_prices: Optional[dict[str, ConvertedRegionPrice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertedRegionPrices') }})
    
