from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import updateroutingcontrolstateentry


@dataclass_json
@dataclass
class UpdateRoutingControlStatesRequest:
    update_routing_control_state_entries: List[updateroutingcontrolstateentry.UpdateRoutingControlStateEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateRoutingControlStateEntries' }})
    
