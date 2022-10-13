from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import runpivotreportresponse


@dataclass_json
@dataclass
class BatchRunPivotReportsResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    pivot_reports: Optional[List[runpivotreportresponse.RunPivotReportResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pivotReports' }})
    
