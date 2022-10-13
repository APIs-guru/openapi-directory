from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import severitylevel


@dataclass_json
@dataclass
class DescribeSeverityLevelsResponse:
    severity_levels: Optional[List[severitylevel.SeverityLevel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severityLevels' }})
    
