from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTP:
    client_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientIp' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpMethod' }})
    http_status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpStatus' }})
    http_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpURL' }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserAgent' }})
    
