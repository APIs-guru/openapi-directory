from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instanceconfig
from . import networkconfig
from . import volumeconfig


@dataclass_json
@dataclass
class ProvisioningConfig:
    instances: Optional[List[instanceconfig.InstanceConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    networks: Optional[List[networkconfig.NetworkConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    ticket_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ticketId' }})
    volumes: Optional[List[volumeconfig.VolumeConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    
