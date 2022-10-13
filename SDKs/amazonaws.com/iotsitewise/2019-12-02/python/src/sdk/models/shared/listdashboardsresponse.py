from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dashboardsummary


@dataclass_json
@dataclass
class ListDashboardsResponse:
    dashboard_summaries: List[dashboardsummary.DashboardSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboardSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
