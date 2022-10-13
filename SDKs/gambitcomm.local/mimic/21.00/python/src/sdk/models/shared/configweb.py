from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigWeb:
    is_persistent_connections: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_persistent_connections' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    rule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    wsdl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wsdl' }})
    
