from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import automlcandidate


@dataclass_json
@dataclass
class ListCandidatesForAutoMlJobResponse:
    candidates: List[automlcandidate.AutoMlCandidate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Candidates' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
