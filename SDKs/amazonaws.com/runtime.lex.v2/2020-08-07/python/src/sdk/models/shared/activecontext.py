from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import activecontexttimetolive


@dataclass_json
@dataclass
class ActiveContext:
    context_attributes: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextAttributes' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    time_to_live: activecontexttimetolive.ActiveContextTimeToLive = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeToLive' }})
    
