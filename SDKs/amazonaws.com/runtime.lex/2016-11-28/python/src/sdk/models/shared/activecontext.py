from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import activecontexttimetolive


@dataclass_json
@dataclass
class ActiveContext:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameters: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    time_to_live: activecontexttimetolive.ActiveContextTimeToLive = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeToLive' }})
    
