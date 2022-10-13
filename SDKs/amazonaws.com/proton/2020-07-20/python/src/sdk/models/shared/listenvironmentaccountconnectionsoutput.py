from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import environmentaccountconnectionsummary


@dataclass_json
@dataclass
class ListEnvironmentAccountConnectionsOutput:
    environment_account_connections: List[environmentaccountconnectionsummary.EnvironmentAccountConnectionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentAccountConnections' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
