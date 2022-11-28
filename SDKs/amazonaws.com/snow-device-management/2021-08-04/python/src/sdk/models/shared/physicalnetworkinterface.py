from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PhysicalNetworkInterface:
    r"""PhysicalNetworkInterface
    The details about the physical network interface for the device.
    """
    
    default_gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultGateway') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    ip_address_assignment: Optional[IPAddressAssignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressAssignment') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macAddress') }})
    netmask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netmask') }})
    physical_connector_type: Optional[PhysicalConnectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalConnectorType') }})
    physical_network_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalNetworkInterfaceId') }})
    
