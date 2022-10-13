from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteRuleGroupRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    rule_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupId' }})
    
