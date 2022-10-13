from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import monitoringexecutionsummary


@dataclass_json
@dataclass
class ListMonitoringExecutionsResponse:
    monitoring_execution_summaries: List[monitoringexecutionsummary.MonitoringExecutionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringExecutionSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
