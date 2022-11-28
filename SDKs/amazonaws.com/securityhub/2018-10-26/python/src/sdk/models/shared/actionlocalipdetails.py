from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActionLocalIPDetails:
    r"""ActionLocalIPDetails
    Provides information about the IP address where the scanned port is located.
    """
    
    ip_address_v4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddressV4') }})
    
