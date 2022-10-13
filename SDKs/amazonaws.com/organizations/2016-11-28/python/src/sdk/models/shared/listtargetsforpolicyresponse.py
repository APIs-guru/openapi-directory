from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policytargetsummary


@dataclass_json
@dataclass
class ListTargetsForPolicyResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    targets: Optional[List[policytargetsummary.PolicyTargetSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
