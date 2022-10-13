from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import runreportresponse


@dataclass_json
@dataclass
class BatchRunReportsResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    reports: Optional[List[runreportresponse.RunReportResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reports' }})
    
