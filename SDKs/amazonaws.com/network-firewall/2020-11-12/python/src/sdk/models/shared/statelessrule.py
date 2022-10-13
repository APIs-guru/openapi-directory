from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import ruledefinition


@dataclass_json
@dataclass
class StatelessRule:
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    rule_definition: ruledefinition.RuleDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleDefinition' }})
    
