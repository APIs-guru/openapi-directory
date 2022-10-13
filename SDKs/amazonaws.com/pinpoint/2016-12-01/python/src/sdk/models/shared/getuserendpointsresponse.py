from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import endpointsresponse


@dataclass_json
@dataclass
class GetUserEndpointsResponse:
    endpoints_response: endpointsresponse.EndpointsResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointsResponse' }})
    
