from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectorsummary


@dataclass_json
@dataclass
class ListConnectorsResponse:
    connectors: Optional[List[connectorsummary.ConnectorSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectors' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
