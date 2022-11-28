from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudApigeeV1NatAddressStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    RESERVED = "RESERVED"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1NatAddressInput:
    r"""GoogleCloudApigeeV1NatAddressInput
    Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GoogleCloudApigeeV1NatAddress:
    r"""GoogleCloudApigeeV1NatAddress
    Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic.
    """
    
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleCloudApigeeV1NatAddressStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
