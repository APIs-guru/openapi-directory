from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rulevariables
from . import rulessource


@dataclass_json
@dataclass
class RuleGroup:
    rule_variables: Optional[rulevariables.RuleVariables] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleVariables' }})
    rules_source: rulessource.RulesSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RulesSource' }})
    
