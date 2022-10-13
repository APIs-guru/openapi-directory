from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteDiskRequest:
    disk_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskName' }})
    force_delete_add_ons: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forceDeleteAddOns' }})
    
