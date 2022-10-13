from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import endpointsummary


@dataclass_json
@dataclass
class ListEndpointsOutput:
    endpoints: List[endpointsummary.EndpointSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoints' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
