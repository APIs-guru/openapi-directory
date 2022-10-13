from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigCoap:
    keystore: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keystore' }})
    primary_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_port' }})
    rule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule' }})
    secure_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secure_port' }})
    
