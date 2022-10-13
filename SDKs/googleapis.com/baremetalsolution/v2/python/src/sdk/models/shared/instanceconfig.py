from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import networkaddress
from . import googlecloudbaremetalsolutionv2logicalinterface
from . import networkaddress

class InstanceConfigNetworkConfigEnum(str, Enum):
    NETWORKCONFIG_UNSPECIFIED = "NETWORKCONFIG_UNSPECIFIED"
    SINGLE_VLAN = "SINGLE_VLAN"
    MULTI_VLAN = "MULTI_VLAN"


@dataclass_json
@dataclass
class InstanceConfig:
    account_networks_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNetworksEnabled' }})
    client_network: Optional[networkaddress.NetworkAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientNetwork' }})
    hyperthreading: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperthreading' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    logical_interfaces: Optional[List[googlecloudbaremetalsolutionv2logicalinterface.GoogleCloudBaremetalsolutionV2LogicalInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logicalInterfaces' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_config: Optional[InstanceConfigNetworkConfigEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfig' }})
    network_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkTemplate' }})
    os_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osImage' }})
    private_network: Optional[networkaddress.NetworkAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateNetwork' }})
    user_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userNote' }})
    
