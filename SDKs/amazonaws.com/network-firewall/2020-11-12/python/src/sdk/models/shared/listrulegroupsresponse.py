from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rulegroupmetadata


@dataclass_json
@dataclass
class ListRuleGroupsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    rule_groups: Optional[List[rulegroupmetadata.RuleGroupMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroups' }})
    
