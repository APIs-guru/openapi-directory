from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serverreplicationconfiguration


@dataclass_json
@dataclass
class ServerGroupReplicationConfiguration:
    server_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverGroupId' }})
    server_replication_configurations: Optional[List[serverreplicationconfiguration.ServerReplicationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverReplicationConfigurations' }})
    
