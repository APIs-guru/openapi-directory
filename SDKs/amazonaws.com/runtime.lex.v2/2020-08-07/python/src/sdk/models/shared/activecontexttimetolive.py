from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActiveContextTimeToLive:
    time_to_live_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeToLiveInSeconds' }})
    turns_to_live: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'turnsToLive' }})
    
