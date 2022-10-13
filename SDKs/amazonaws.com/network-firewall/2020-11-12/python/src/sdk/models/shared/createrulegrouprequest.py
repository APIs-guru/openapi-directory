from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rulegroup
from . import tag
from . import rulegrouptype_enum


@dataclass_json
@dataclass
class CreateRuleGroupRequest:
    capacity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Capacity' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DryRun' }})
    rule_group: Optional[rulegroup.RuleGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroup' }})
    rule_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupName' }})
    rules: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    type: rulegrouptype_enum.RuleGroupTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
