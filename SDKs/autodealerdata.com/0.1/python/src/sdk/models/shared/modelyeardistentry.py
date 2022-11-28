from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModelYearDistEntry:
    brand_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandName') }})
    model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelName') }})
    percent_of_market: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentOfMarket') }})
    year: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
