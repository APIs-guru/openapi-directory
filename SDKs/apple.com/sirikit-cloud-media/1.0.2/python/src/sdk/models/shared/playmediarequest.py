from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import constraints
from . import useractivity


@dataclass_json
@dataclass
class PlayMediaRequest:
    constraints: constraints.Constraints = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraints' }})
    user_activity: useractivity.UserActivity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userActivity' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
