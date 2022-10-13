from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import rulegroupresponse


@dataclass_json
@dataclass
class UpdateRuleGroupResponse:
    rule_group_response: rulegroupresponse.RuleGroupResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupResponse' }})
    update_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateToken' }})
    
