from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import instanceconfig
from . import networkconfig
from . import volumeconfig

class ProvisioningConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    SUBMITTED = "SUBMITTED"
    PROVISIONING = "PROVISIONING"
    PROVISIONED = "PROVISIONED"
    VALIDATED = "VALIDATED"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class ProvisioningConfig:
    cloud_console_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudConsoleUri' }})
    custom_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customId' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    handover_service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handoverServiceAccount' }})
    instances: Optional[List[instanceconfig.InstanceConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    networks: Optional[List[networkconfig.NetworkConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    state: Optional[ProvisioningConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    ticket_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ticketId' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    volumes: Optional[List[volumeconfig.VolumeConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    vpc_sc_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcScEnabled' }})
    
