from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActionLocalIPDetails:
    ip_address_v4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddressV4' }})
    
