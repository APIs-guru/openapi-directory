from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instanceportstate


@dataclass_json
@dataclass
class GetInstancePortStatesResult:
    port_states: Optional[List[instanceportstate.InstancePortState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portStates' }})
    
