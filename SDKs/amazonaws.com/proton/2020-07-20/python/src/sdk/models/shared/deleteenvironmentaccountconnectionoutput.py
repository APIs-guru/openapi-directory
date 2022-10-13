from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import environmentaccountconnection


@dataclass_json
@dataclass
class DeleteEnvironmentAccountConnectionOutput:
    environment_account_connection: Optional[environmentaccountconnection.EnvironmentAccountConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentAccountConnection' }})
    
