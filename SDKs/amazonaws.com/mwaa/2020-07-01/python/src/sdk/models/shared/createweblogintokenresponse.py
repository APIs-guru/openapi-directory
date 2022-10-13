from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateWebLoginTokenResponse:
    web_server_hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebServerHostname' }})
    web_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebToken' }})
    
