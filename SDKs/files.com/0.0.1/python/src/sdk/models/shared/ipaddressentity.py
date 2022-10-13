from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IPAddressEntity:
    associated_with: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associated_with' }})
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_addresses' }})
    
