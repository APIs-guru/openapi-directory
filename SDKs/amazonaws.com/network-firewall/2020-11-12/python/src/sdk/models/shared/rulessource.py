from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rulessourcelist
from . import statefulrule
from . import statelessrulesandcustomactions


@dataclass_json
@dataclass
class RulesSource:
    rules_source_list: Optional[rulessourcelist.RulesSourceList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RulesSourceList' }})
    rules_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RulesString' }})
    stateful_rules: Optional[List[statefulrule.StatefulRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatefulRules' }})
    stateless_rules_and_custom_actions: Optional[statelessrulesandcustomactions.StatelessRulesAndCustomActions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatelessRulesAndCustomActions' }})
    
