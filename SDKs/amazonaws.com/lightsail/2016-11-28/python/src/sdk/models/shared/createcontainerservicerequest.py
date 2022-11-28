from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateContainerServiceRequest:
    power: ContainerServicePowerNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('power') }})
    scale: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    deployment: Optional[ContainerServiceDeploymentRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    public_domain_names: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicDomainNames') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
