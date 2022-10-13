from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trialcomponentsummary


@dataclass_json
@dataclass
class ListTrialComponentsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    trial_component_summaries: Optional[List[trialcomponentsummary.TrialComponentSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialComponentSummaries' }})
    
