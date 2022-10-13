from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import canarylastrun


@dataclass_json
@dataclass
class DescribeCanariesLastRunResponse:
    canaries_last_run: Optional[List[canarylastrun.CanaryLastRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanariesLastRun' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
