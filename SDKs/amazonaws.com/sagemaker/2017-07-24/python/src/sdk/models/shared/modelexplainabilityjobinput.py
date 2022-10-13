from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import endpointinput


@dataclass_json
@dataclass
class ModelExplainabilityJobInput:
    endpoint_input: endpointinput.EndpointInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointInput' }})
    
