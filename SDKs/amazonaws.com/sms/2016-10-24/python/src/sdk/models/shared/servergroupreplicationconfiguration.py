from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServerGroupReplicationConfiguration:
    r"""ServerGroupReplicationConfiguration
    Replication configuration for a server group.
    """
    
    server_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupId') }})
    server_replication_configurations: Optional[List[ServerReplicationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverReplicationConfigurations') }})
    
