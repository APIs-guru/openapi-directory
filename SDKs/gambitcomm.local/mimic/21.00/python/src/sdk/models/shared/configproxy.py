from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigProxy:
    tcp_nodelay: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TCP_NODELAY' }})
    client_to_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_to_server' }})
    disconnect_delay: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disconnect_delay' }})
    max_connects: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_connects' }})
    portno: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portno' }})
    pre_connect: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pre_connect' }})
    server_to_client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_to_client' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    transport: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transport' }})
    
