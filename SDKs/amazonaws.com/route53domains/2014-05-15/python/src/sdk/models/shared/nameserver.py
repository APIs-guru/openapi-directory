from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Nameserver:
    glue_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlueIps' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
