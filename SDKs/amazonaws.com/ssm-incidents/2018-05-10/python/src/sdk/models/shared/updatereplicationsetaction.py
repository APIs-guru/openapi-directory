from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import addregionaction
from . import deleteregionaction


@dataclass_json
@dataclass
class UpdateReplicationSetAction:
    add_region_action: Optional[addregionaction.AddRegionAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addRegionAction' }})
    delete_region_action: Optional[deleteregionaction.DeleteRegionAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteRegionAction' }})
    
