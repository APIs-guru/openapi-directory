from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reportrequest


@dataclass_json
@dataclass
class GetReportsRequest:
    report_requests: Optional[List[reportrequest.ReportRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportRequests' }})
    use_resource_quotas: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useResourceQuotas' }})
    
