from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchMeterUsageResult:
    r"""BatchMeterUsageResult
    Contains the UsageRecords processed by BatchMeterUsage and any records that have failed due to transient error.
    """
    
    results: Optional[List[UsageRecordResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    unprocessed_records: Optional[List[UsageRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedRecords') }})
    
