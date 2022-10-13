from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awssecurityfinding


@dataclass_json
@dataclass
class GetFindingsResponse:
    findings: List[awssecurityfinding.AwsSecurityFinding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Findings' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
