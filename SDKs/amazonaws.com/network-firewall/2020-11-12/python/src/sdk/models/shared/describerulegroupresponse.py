from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rulegroup
from . import rulegroupresponse


@dataclass_json
@dataclass
class DescribeRuleGroupResponse:
    rule_group: Optional[rulegroup.RuleGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroup' }})
    rule_group_response: rulegroupresponse.RuleGroupResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupResponse' }})
    update_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateToken' }})
    
