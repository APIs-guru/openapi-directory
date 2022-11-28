from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMonitoringSchedulesResponse:
    monitoring_schedule_summaries: List[MonitoringScheduleSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringScheduleSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
