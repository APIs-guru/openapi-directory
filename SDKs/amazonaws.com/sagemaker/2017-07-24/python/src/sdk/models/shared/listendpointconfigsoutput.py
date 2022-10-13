from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import endpointconfigsummary


@dataclass_json
@dataclass
class ListEndpointConfigsOutput:
    endpoint_configs: List[endpointconfigsummary.EndpointConfigSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfigs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
