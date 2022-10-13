from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import usagerecord


@dataclass_json
@dataclass
class BatchMeterUsageRequest:
    product_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductCode' }})
    usage_records: List[usagerecord.UsageRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UsageRecords' }})
    
