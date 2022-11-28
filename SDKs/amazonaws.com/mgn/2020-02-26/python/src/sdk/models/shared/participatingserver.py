from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParticipatingServer:
    r"""ParticipatingServer
    Server participating in Job.
    """
    
    launch_status: Optional[LaunchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStatus') }})
    source_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceServerID') }})
    
