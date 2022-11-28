from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InstanceConfigNetworkConfigEnum(str, Enum):
    NETWORKCONFIG_UNSPECIFIED = "NETWORKCONFIG_UNSPECIFIED"
    SINGLE_VLAN = "SINGLE_VLAN"
    MULTI_VLAN = "MULTI_VLAN"


@dataclass_json
@dataclass
class InstanceConfig:
    r"""InstanceConfig
    Configuration parameters for a new instance.
    """
    
    account_networks_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNetworksEnabled') }})
    client_network: Optional[NetworkAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientNetwork') }})
    hyperthreading: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperthreading') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    logical_interfaces: Optional[List[GoogleCloudBaremetalsolutionV2LogicalInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalInterfaces') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_config: Optional[InstanceConfigNetworkConfigEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    network_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTemplate') }})
    os_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osImage') }})
    private_network: Optional[NetworkAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateNetwork') }})
    user_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userNote') }})
    

@dataclass_json
@dataclass
class InstanceConfigInput:
    r"""InstanceConfigInput
    Configuration parameters for a new instance.
    """
    
    account_networks_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNetworksEnabled') }})
    client_network: Optional[NetworkAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientNetwork') }})
    hyperthreading: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperthreading') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    logical_interfaces: Optional[List[GoogleCloudBaremetalsolutionV2LogicalInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalInterfaces') }})
    network_config: Optional[InstanceConfigNetworkConfigEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    network_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTemplate') }})
    os_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osImage') }})
    private_network: Optional[NetworkAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateNetwork') }})
    user_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userNote') }})
    
