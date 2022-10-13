from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import performancereport


@dataclass_json
@dataclass
class PerformanceReportList:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    performance_report: Optional[List[performancereport.PerformanceReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performanceReport' }})
    
