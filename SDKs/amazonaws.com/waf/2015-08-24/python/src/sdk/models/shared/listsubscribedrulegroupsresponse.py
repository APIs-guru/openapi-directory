from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subscribedrulegroupsummary


@dataclass_json
@dataclass
class ListSubscribedRuleGroupsResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    rule_groups: Optional[List[subscribedrulegroupsummary.SubscribedRuleGroupSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroups' }})
    
