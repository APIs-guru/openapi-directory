from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usagerecordresult
from . import usagerecord


@dataclass_json
@dataclass
class BatchMeterUsageResult:
    results: Optional[List[usagerecordresult.UsageRecordResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Results' }})
    unprocessed_records: Optional[List[usagerecord.UsageRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedRecords' }})
    
