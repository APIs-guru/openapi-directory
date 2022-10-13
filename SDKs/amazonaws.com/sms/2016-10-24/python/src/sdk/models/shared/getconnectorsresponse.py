from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connector


@dataclass_json
@dataclass
class GetConnectorsResponse:
    connector_list: Optional[List[connector.Connector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
