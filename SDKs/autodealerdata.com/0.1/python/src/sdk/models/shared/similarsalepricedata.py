from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SimilarSalePriceData:
    days_back: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'daysBack' }})
    mile_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mileCount' }})
    miles_avg: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'milesAvg' }})
    miles_std_dev: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'milesStdDev' }})
    new_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newCount' }})
    new_sale_avg: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newSaleAvg' }})
    new_sale_std_dev: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newSaleStdDev' }})
    used_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedCount' }})
    used_sale_avg: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedSaleAvg' }})
    used_sale_std_dev: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedSaleStdDev' }})
    
