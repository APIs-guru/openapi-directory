from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import finding


@dataclass_json
@dataclass
class GetFindingsResponse:
    findings: Optional[List[finding.Finding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findings' }})
    
