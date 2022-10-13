from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import rulegroupresponse


@dataclass_json
@dataclass
class DeleteRuleGroupResponse:
    rule_group_response: rulegroupresponse.RuleGroupResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupResponse' }})
    
