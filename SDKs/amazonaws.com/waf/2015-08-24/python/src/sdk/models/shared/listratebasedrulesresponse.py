from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rulesummary


@dataclass_json
@dataclass
class ListRateBasedRulesResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    rules: Optional[List[rulesummary.RuleSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    
