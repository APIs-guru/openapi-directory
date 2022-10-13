from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attacksummary


@dataclass_json
@dataclass
class ListAttacksResponse:
    attack_summaries: Optional[List[attacksummary.AttackSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttackSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
