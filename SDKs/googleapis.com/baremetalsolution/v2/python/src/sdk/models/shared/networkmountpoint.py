from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NetworkMountPoint:
    r"""NetworkMountPoint
    Mount point for a network.
    """
    
    default_gateway: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultGateway') }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    logical_interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalInterface') }})
    
