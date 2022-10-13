from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servergroupreplicationconfiguration


@dataclass_json
@dataclass
class GetAppReplicationConfigurationResponse:
    server_group_replication_configurations: Optional[List[servergroupreplicationconfiguration.ServerGroupReplicationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverGroupReplicationConfigurations' }})
    
