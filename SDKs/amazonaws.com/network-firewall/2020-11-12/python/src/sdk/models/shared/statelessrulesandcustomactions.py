from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customaction
from . import statelessrule


@dataclass_json
@dataclass
class StatelessRulesAndCustomActions:
    custom_actions: Optional[List[customaction.CustomAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomActions' }})
    stateless_rules: List[statelessrule.StatelessRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatelessRules' }})
    
