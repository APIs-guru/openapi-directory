from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import server
from . import serverreplicationparameters


@dataclass_json
@dataclass
class ServerReplicationConfiguration:
    server: Optional[server.Server] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    server_replication_parameters: Optional[serverreplicationparameters.ServerReplicationParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverReplicationParameters' }})
    
