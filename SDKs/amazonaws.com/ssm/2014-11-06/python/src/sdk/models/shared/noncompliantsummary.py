from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import severitysummary


@dataclass_json
@dataclass
class NonCompliantSummary:
    non_compliant_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonCompliantCount' }})
    severity_summary: Optional[severitysummary.SeveritySummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SeveritySummary' }})
    
