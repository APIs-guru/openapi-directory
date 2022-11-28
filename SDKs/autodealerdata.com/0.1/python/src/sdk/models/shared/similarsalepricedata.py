from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SimilarSalePriceData:
    days_back: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('daysBack') }})
    mile_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mileCount') }})
    miles_avg: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('milesAvg') }})
    miles_std_dev: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('milesStdDev') }})
    new_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newCount') }})
    new_sale_avg: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSaleAvg') }})
    new_sale_std_dev: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSaleStdDev') }})
    used_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedCount') }})
    used_sale_avg: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedSaleAvg') }})
    used_sale_std_dev: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedSaleStdDev') }})
    
