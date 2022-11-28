from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutServerRedundancyHostPathParams:
    host: str = field(metadata={'path_param': { 'field_name': 'host', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutServerRedundancyHostRequestBody:
    redundancy_allowed: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('redundancyAllowed') }})
    

@dataclass
class PutServerRedundancyHostSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutServerRedundancyHostRequest:
    path_params: PutServerRedundancyHostPathParams = field()
    security: PutServerRedundancyHostSecurity = field()
    request: Optional[PutServerRedundancyHostRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutServerRedundancyHostResponse:
    content_type: str = field()
    status_code: int = field()
    
