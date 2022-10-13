from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import serviceupdatestatus_enum


@dataclass_json
@dataclass
class PendingModifiedServiceUpdate:
    service_update_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceUpdateName' }})
    status: Optional[serviceupdatestatus_enum.ServiceUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
