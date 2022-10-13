from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AddPluginRequestBody1:
    npm_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'npmName' }})
    

@dataclass_json
@dataclass
class AddPluginRequestBody2:
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    

@dataclass
class AddPluginSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddPluginRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddPluginSecurity = field(default=None)
    

@dataclass
class AddPluginResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
