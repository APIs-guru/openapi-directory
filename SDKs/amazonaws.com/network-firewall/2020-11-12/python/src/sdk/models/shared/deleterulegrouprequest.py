from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import rulegrouptype_enum


@dataclass_json
@dataclass
class DeleteRuleGroupRequest:
    rule_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupArn' }})
    rule_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupName' }})
    type: Optional[rulegrouptype_enum.RuleGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
