from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import servertype_enum
from . import vmserver


@dataclass_json
@dataclass
class Server:
    replication_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationJobId' }})
    replication_job_terminated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationJobTerminated' }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverId' }})
    server_type: Optional[servertype_enum.ServerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverType' }})
    vm_server: Optional[vmserver.VMServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmServer' }})
    
