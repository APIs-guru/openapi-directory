from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModelDeployConfig:
    r"""ModelDeployConfig
    Specifies how to generate the endpoint name for an automatic one-click Autopilot model deployment.
    """
    
    auto_generate_endpoint_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoGenerateEndpointName') }})
    endpoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointName') }})
    
