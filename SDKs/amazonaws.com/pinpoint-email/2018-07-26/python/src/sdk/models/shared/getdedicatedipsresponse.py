from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dedicatedip


@dataclass_json
@dataclass
class GetDedicatedIpsResponse:
    dedicated_ips: Optional[List[dedicatedip.DedicatedIP]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DedicatedIps' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
