from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PutServerRedundancyHostPathParams:
    host: str = field(default=None, metadata={'path_param': { 'field_name': 'host', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutServerRedundancyHostRequestBody:
    redundancy_allowed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redundancyAllowed' }})
    

@dataclass
class PutServerRedundancyHostSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutServerRedundancyHostRequest:
    path_params: PutServerRedundancyHostPathParams = field(default=None)
    request: Optional[PutServerRedundancyHostRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutServerRedundancyHostSecurity = field(default=None)
    

@dataclass
class PutServerRedundancyHostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
