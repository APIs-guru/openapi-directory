from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rulegroupsummary


@dataclass_json
@dataclass
class ListRuleGroupsResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    rule_groups: Optional[List[rulegroupsummary.RuleGroupSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroups' }})
    
