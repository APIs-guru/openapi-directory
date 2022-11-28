from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProvisioningConfig:
    r"""ProvisioningConfig
    An provisioning configuration.
    """
    
    instances: Optional[List[InstanceConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    networks: Optional[List[NetworkConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    ticket_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketId') }})
    volumes: Optional[List[VolumeConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
