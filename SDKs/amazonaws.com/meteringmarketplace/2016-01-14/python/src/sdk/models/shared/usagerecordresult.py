from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import usagerecordresultstatus_enum
from . import usagerecord


@dataclass_json
@dataclass
class UsageRecordResult:
    metering_record_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MeteringRecordId' }})
    status: Optional[usagerecordresultstatus_enum.UsageRecordResultStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    usage_record: Optional[usagerecord.UsageRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UsageRecord' }})
    
