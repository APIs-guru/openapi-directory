from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class ExistsSpaceNamePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExistsSpaceNameSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ExistsSpaceNameRequest:
    path_params: ExistsSpaceNamePathParams = field()
    security: ExistsSpaceNameSecurity = field()
    

@dataclass
class ExistsSpaceNameResponse:
    content_type: str = field()
    status_code: int = field()
    
