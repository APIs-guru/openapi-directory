from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appvalidationconfiguration
from . import servergroupvalidationconfiguration


@dataclass_json
@dataclass
class PutAppValidationConfigurationRequest:
    app_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    app_validation_configurations: Optional[List[appvalidationconfiguration.AppValidationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appValidationConfigurations' }})
    server_group_validation_configurations: Optional[List[servergroupvalidationconfiguration.ServerGroupValidationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverGroupValidationConfigurations' }})
    
