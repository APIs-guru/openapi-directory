from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import endpoint


@dataclass_json
@dataclass
class DescribeEndpointsResponse:
    endpoints: List[endpoint.Endpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoints' }})
    
