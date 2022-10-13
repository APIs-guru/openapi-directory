from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import environmentaccountconnection


@dataclass_json
@dataclass
class CreateEnvironmentAccountConnectionOutput:
    environment_account_connection: environmentaccountconnection.EnvironmentAccountConnection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentAccountConnection' }})
    
