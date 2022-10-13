from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import endpointresponse


@dataclass_json
@dataclass
class EndpointsResponse:
    item: List[endpointresponse.EndpointResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Item' }})
    
