from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EndpointRequest:
    r"""EndpointRequest
    Describes the settings of a public endpoint for an Amazon Lightsail container service.
    """
    
    container_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    container_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPort') }})
    health_check: Optional[ContainerServiceHealthCheckConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    
