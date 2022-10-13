from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectionstatus_enum


@dataclass_json
@dataclass
class GetConnectionStatusResponse:
    status: Optional[connectionstatus_enum.ConnectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    
