from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import endpointresponse


@dataclass_json
@dataclass
class DeleteEndpointResponse:
    endpoint_response: endpointresponse.EndpointResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointResponse' }})
    
