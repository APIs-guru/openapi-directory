from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import convertedotherregionsprice
from . import convertedregionprice


@dataclass_json
@dataclass
class ConvertRegionPricesResponse:
    converted_other_regions_price: Optional[convertedotherregionsprice.ConvertedOtherRegionsPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'convertedOtherRegionsPrice' }})
    converted_region_prices: Optional[dict[str, convertedregionprice.ConvertedRegionPrice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'convertedRegionPrices' }})
    
