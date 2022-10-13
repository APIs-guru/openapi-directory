from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V2ServerKeyRestrictions:
    allowed_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedIps' }})
    
