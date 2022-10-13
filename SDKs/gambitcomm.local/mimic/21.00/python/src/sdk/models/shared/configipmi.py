from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigIpmi:
    primary_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_port' }})
    secure_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secure_port' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
