from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Certificate:
    ca_cert: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ca_cert' }})
    server_cert: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_cert' }})
    user_cert: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_cert' }})
    user_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_key' }})
    
