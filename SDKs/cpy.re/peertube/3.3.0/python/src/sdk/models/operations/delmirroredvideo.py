from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DelMirroredVideoPathParams:
    redundancy_id: str = field(metadata={'path_param': { 'field_name': 'redundancyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelMirroredVideoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelMirroredVideoRequest:
    path_params: DelMirroredVideoPathParams = field()
    security: DelMirroredVideoSecurity = field()
    

@dataclass
class DelMirroredVideoResponse:
    content_type: str = field()
    status_code: int = field()
    
