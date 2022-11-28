from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchMeterUsageRequest:
    r"""BatchMeterUsageRequest
    A BatchMeterUsageRequest contains UsageRecords, which indicate quantities of usage within your application.
    """
    
    product_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductCode') }})
    usage_records: List[UsageRecord] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageRecords') }})
    
