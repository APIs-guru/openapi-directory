from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrapDest:
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IP' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    
