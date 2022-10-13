from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import monitoringschedulesummary


@dataclass_json
@dataclass
class ListMonitoringSchedulesResponse:
    monitoring_schedule_summaries: List[monitoringschedulesummary.MonitoringScheduleSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringScheduleSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
