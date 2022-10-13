from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datareplicationinfo
from . import launchedinstance
from . import lifecycle
from . import sourceproperties


@dataclass_json
@dataclass
class SourceServer:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    data_replication_info: Optional[datareplicationinfo.DataReplicationInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataReplicationInfo' }})
    is_archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isArchived' }})
    launched_instance: Optional[launchedinstance.LaunchedInstance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchedInstance' }})
    life_cycle: Optional[lifecycle.LifeCycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifeCycle' }})
    source_properties: Optional[sourceproperties.SourceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceProperties' }})
    source_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceServerID' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
