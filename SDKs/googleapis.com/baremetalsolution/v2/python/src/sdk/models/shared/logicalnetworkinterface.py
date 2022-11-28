from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LogicalNetworkInterfaceNetworkTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CLIENT = "CLIENT"
    PRIVATE = "PRIVATE"


@dataclass_json
@dataclass
class LogicalNetworkInterface:
    r"""LogicalNetworkInterface
    Each logical network interface is effectively a network and IP pair.
    """
    
    default_gateway: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultGateway') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_type: Optional[LogicalNetworkInterfaceNetworkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkType') }})
    
