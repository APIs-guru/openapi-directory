from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UninstallPluginRequestBody:
    npm_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'npmName' }})
    

@dataclass
class UninstallPluginSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UninstallPluginRequest:
    request: Optional[UninstallPluginRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UninstallPluginSecurity = field(default=None)
    

@dataclass
class UninstallPluginResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
