from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import statefulrulegroupreference
from . import customaction
from . import statelessrulegroupreference


@dataclass_json
@dataclass
class FirewallPolicy:
    stateful_rule_group_references: Optional[List[statefulrulegroupreference.StatefulRuleGroupReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatefulRuleGroupReferences' }})
    stateless_custom_actions: Optional[List[customaction.CustomAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatelessCustomActions' }})
    stateless_default_actions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatelessDefaultActions' }})
    stateless_fragment_default_actions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatelessFragmentDefaultActions' }})
    stateless_rule_group_references: Optional[List[statelessrulegroupreference.StatelessRuleGroupReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatelessRuleGroupReferences' }})
    
