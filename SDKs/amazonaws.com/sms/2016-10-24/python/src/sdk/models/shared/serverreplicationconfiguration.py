from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServerReplicationConfiguration:
    r"""ServerReplicationConfiguration
    Replication configuration of a server.
    """
    
    server: Optional[Server] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    server_replication_parameters: Optional[ServerReplicationParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverReplicationParameters') }})
    
