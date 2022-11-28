from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TopModelEntry:
    brand_market_share: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandMarketShare') }})
    brand_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandName') }})
    model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelName') }})
    percent_of_brand_sales: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentOfBrandSales') }})
    percent_of_top_sales: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentOfTopSales') }})
    
