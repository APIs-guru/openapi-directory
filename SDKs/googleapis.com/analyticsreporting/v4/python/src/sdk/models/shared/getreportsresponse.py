from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import report
from . import resourcequotasremaining


@dataclass_json
@dataclass
class GetReportsResponse:
    query_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryCost' }})
    reports: Optional[List[report.Report]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reports' }})
    resource_quotas_remaining: Optional[resourcequotasremaining.ResourceQuotasRemaining] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceQuotasRemaining' }})
    
