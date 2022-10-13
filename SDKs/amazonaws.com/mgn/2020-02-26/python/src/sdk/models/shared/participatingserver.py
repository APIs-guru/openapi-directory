from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import launchstatus_enum


@dataclass_json
@dataclass
class ParticipatingServer:
    launch_status: Optional[launchstatus_enum.LaunchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchStatus' }})
    source_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceServerID' }})
    
