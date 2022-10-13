from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import canaryrun


@dataclass_json
@dataclass
class GetCanaryRunsResponse:
    canary_runs: Optional[List[canaryrun.CanaryRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanaryRuns' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
