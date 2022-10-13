from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import findingaction
from . import findingactor


@dataclass_json
@dataclass
class PolicyDetails:
    action: Optional[findingaction.FindingAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    actor: Optional[findingactor.FindingActor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor' }})
    
