from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UsageRecordResult:
    r"""UsageRecordResult
    A UsageRecordResult indicates the status of a given UsageRecord processed by BatchMeterUsage.
    """
    
    metering_record_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeteringRecordId') }})
    status: Optional[UsageRecordResultStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    usage_record: Optional[UsageRecord] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageRecord') }})
    
