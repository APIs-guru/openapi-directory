from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigMqtt:
    broker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'broker' }})
    clientid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientid' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    is_tls: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_tls' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    tls_conf_filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls_conf_filename' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
