from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import runreportrequest


@dataclass_json
@dataclass
class BatchRunReportsRequest:
    requests: Optional[List[runreportrequest.RunReportRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
