from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import rulegroup
from . import rulegrouptype_enum


@dataclass_json
@dataclass
class UpdateRuleGroupRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DryRun' }})
    rule_group: Optional[rulegroup.RuleGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroup' }})
    rule_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupArn' }})
    rule_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupName' }})
    rules: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    type: Optional[rulegrouptype_enum.RuleGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    update_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateToken' }})
    
