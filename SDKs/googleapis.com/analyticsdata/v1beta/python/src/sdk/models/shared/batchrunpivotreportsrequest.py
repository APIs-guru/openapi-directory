from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import runpivotreportrequest


@dataclass_json
@dataclass
class BatchRunPivotReportsRequest:
    requests: Optional[List[runpivotreportrequest.RunPivotReportRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
