from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trialsummary


@dataclass_json
@dataclass
class ListTrialsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    trial_summaries: Optional[List[trialsummary.TrialSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialSummaries' }})
    
