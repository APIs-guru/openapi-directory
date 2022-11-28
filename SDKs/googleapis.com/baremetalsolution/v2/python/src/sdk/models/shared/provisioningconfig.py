from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""ProvisioningConfig
    A provisioning configuration.
    """
    
    cloud_console_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudConsoleUri') }})
    custom_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customId') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    handover_service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handoverServiceAccount') }})
    instances: Optional[List[InstanceConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    networks: Optional[List[NetworkConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    state: Optional[ProvisioningConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    ticket_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    volumes: Optional[List[VolumeConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    vpc_sc_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcScEnabled') }})
    

@dataclass_json
@dataclass
class ProvisioningConfigInput:
    r"""ProvisioningConfigInput
    A provisioning configuration.
    """
    
    custom_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customId') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    handover_service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handoverServiceAccount') }})
    instances: Optional[List[InstanceConfigInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    networks: Optional[List[NetworkConfigInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    ticket_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketId') }})
    volumes: Optional[List[VolumeConfigInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    vpc_sc_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcScEnabled') }})
    
