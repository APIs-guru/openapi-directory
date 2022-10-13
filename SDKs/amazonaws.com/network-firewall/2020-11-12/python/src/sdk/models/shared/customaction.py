from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import actiondefinition


@dataclass_json
@dataclass
class CustomAction:
    action_definition: actiondefinition.ActionDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionDefinition' }})
    action_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionName' }})
    
