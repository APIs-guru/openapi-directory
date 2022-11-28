from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEnvironmentAccountConnectionsOutput:
    environment_account_connections: List[EnvironmentAccountConnectionSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccountConnections') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
