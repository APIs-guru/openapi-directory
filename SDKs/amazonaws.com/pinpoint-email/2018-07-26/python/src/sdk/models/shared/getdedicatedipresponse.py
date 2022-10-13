from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dedicatedip


@dataclass_json
@dataclass
class GetDedicatedIPResponse:
    dedicated_ip: Optional[dedicatedip.DedicatedIP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DedicatedIp' }})
    
