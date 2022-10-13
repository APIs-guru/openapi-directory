from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import server
from . import servervalidationstrategy_enum
from . import userdatavalidationparameters


@dataclass_json
@dataclass
class ServerValidationConfiguration:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server: Optional[server.Server] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    server_validation_strategy: Optional[servervalidationstrategy_enum.ServerValidationStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverValidationStrategy' }})
    user_data_validation_parameters: Optional[userdatavalidationparameters.UserDataValidationParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDataValidationParameters' }})
    validation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationId' }})
    
