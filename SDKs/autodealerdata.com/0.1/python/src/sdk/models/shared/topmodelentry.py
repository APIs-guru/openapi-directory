from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TopModelEntry:
    brand_market_share: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandMarketShare' }})
    brand_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandName' }})
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelName' }})
    percent_of_brand_sales: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentOfBrandSales' }})
    percent_of_top_sales: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentOfTopSales' }})
    
