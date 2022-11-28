from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateContainerServiceDeploymentRequest:
    service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    containers: Optional[dict[str, Container]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    public_endpoint: Optional[EndpointRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicEndpoint') }})
    
