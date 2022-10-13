from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servervalidationconfiguration


@dataclass_json
@dataclass
class ServerGroupValidationConfiguration:
    server_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverGroupId' }})
    server_validation_configurations: Optional[List[servervalidationconfiguration.ServerValidationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverValidationConfigurations' }})
    
