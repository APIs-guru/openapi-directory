from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModelDeployConfig:
    auto_generate_endpoint_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoGenerateEndpointName' }})
    endpoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointName' }})
    
