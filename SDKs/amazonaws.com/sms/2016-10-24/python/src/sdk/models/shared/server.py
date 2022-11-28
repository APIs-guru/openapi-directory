from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Server:
    r"""Server
    Represents a server.
    """
    
    replication_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationJobId') }})
    replication_job_terminated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationJobTerminated') }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverId') }})
    server_type: Optional[ServerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverType') }})
    vm_server: Optional[VMServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmServer') }})
    
